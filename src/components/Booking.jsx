import {  useState } from "react"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import api from "../../api"

export default function Booking() {
    const [selectedDate, setSelectedDate] = useState(null)
    const [slots, setSlots] = useState([])
    const [selectedSlot, setSelectedSlot] = useState(null)
    const [form, setForm] = useState({
        clientName: '',
        clientEmail: '',
        clientPhone: ''
    })
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    // quando scelgo una data: chiedo al backend gli slot liberi
    const handleDateChange = async (date) => {
        setSelectedDate(date)
        setSelectedSlot(null)
        setSlots([])
        setMessage(null)
        
        // converto la data in 'YYY-MM-DD' (formato che vuole il backend)
        const dateStr = date.toISOString().slice(0, 10)
        
        try {
            const res = await api.get('available-slots', {
                params: {date: dateStr}
            })
            setSlots(res.data.availableSlots)
        } catch (err) {
            setMessage({ type: 'error', text: 'Errore nel caricamento degli orari'})
        }
    }
        
        const handleInput = (e) => {
            setForm({ ...form, [e.target.name]: e.target.value})
        }

        // invio dell'appuntamento
        const handleSubmit = async (e) => {
            e.preventDefault()
            if(!selectedDate || !selectedSlot) {
                setMessage({ type: 'error', text: 'Seleziona data e orario'})
                return
            }

            setLoading(true)
            setMessage(null)

            const dateStr = selectedDate.toISOString().slice(0, 10)

            try {
                await api.post('/book', {
                    date: dateStr,
                    startTime: selectedSlot,
                    clientName: form.clientName,
                    clientEmail: form.clientEmail,
                    clientPhone: form.clientPhone
                })
                setMessage({ type:'success', text:'Prenotazione confermata! Controlla la tua email'})
                // reset
                setForm({ clientName: '', clientEmail: '', clientPhone:''})
                setSelectedSlot(null)
                // ricarico gli slot: quello preso sparisce
                handleDateChange(selectedDate)
            } catch (err) {
                const text = err.response?.data?.error || 'Errore durante la prenotazione'
                setMessage({type: 'error', text})
            } finally{
                setLoading(false)
            }
        }

    return (
        <>
       <section id="prenota" className="py-5 py-lg-6">
        <div className="container py-4">
            <div className="text-center mx-auto mb-5" 
            style={{maxWidth: '600px'}}>
                <span className="badge-sage mb-3">
                Agenda Online
                </span>
                <h2 className="display-6 font-heading">
                    Prenota una consulenza
                </h2>
                <p className="text-muted">
                    Scegli il giorno e l'orario che preferisci.
                </p>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <form onSubmit={handleSubmit} 
                    className="p-4 p-md-5 bg-white rounded-3 border">

                        {/* data */}
                        <div className="mb-3">
                          <label className="form-label fw-medium">
                          Scegli una data
                          </label>
                         <DatePicker
                         selected={selectedDate}
                         onChange={handleDateChange}
                         minDate={new Date()}
                         dateFormat="dd/MM/yyyy"
                         placeholderText="Clicca Per scegliere"
                         className="form-control"
                         /> 
                        </div>

                        {/* slot liberi */}
                       {selectedDate && (
                        <div className="mb-4">
                            <label className="form-label fw-medium">
                                Orari disponibili
                            </label>
                            {slots.length === 0 ? (
                                <p className="text-muted small"> 
                                Nessun orario libero per questa data
                                </p>
                            ) : (
                                <div className="d-flex flex-wrap gap-2">
                                    {slots.map((slot) => (
                                        <button
                                        type="button"
                                        key={slot}
                                        onClick={() => setSelectedSlot(slot)}
                                        className={`btn ${selectedSlot === slot ? 'btn primary' :
                                            'btn-outline-primary'
                                        }`}>
                                            {slot}

                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                       )}

                       {/* dati paziente */}
                       <div className="row g-3 mb-4">
                        <div className="col-md-6">
                            <label className="form-label small fw-medium">
                       Nome e Cognome *
                            </label>
                            <input type="text"
                            name="clientName"
                            value={form.clientName}
                            onChange={handleInput} 
                            className="form-control"
                            required />
                        </div>
            
                        <div className="col-md-6">
                            <label className="form-label small fw-medium">
                       Email *
                            </label>
                            <input type="text"
                            name="clientEmail"
                            value={form.clientEmail}
                            onChange={handleInput} 
                            className="form-control"
                            required />
                        </div>
                        <div className="col-12">
                            <label className="form-label small fw-medium">
                       Telefono *
                            </label>
                            <input type="text"
                            name="clientPhone"
                            value={form.clientPhone}
                            onChange={handleInput} 
                            className="form-control"
                            required />
                        </div>
                       </div>

                       {/* messaggio esito */}
                       {message && (
                        <div className={`alert ${message.type === 'success' 
                            ? 'allert-sussess' : 'allert-danger'}`}>
                                {message.text}
                        </div>
                       )}

                       <button
                       type="submit"
                       className="btn btn-primary"
                       disabled={loading}>
                       {loading ? 'Invio...' : 'Prenota'}
                        </button> 
                    </form>
                </div>
            </div>
        </div>
        </section> 
        </>
    )
}
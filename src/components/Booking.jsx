import {  useState } from "react"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import api from "../api"

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

        const inputClass= "w-full rounded-lg border border-line px-3 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"

    return (
        <>
       <section id="prenota" className="py-16 lg:py-24">
        <div className="max-w-6xl mx-ato px-4">

            <div className="max-w-xl mx-auto text-center mb-12">
                <span className="inline-block rounded-full bg-sage-light border border-sage px-4 py-1.5 text-sm font-medium text-primary mb-4">
                Agenda Online
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink mb-4">
                    Prenota una consulenza
                </h2>
                <p className="text-ink/70">
                    Scegli il giorno e l'orario che preferisci.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} 
                    className="bg-white border border-line rounded-2xl p-6 md:p-8">

                        {/* data */}
                        <div className="mb-6">
                          <label className="block font-medium text-ink mb-2">
                          Scegli una data
                          </label>
                         <DatePicker
                         selected={selectedDate}
                         onChange={handleDateChange}
                         minDate={new Date()}
                         dateFormat="dd/MM/yyyy"
                         placeholderText="Clicca Per scegliere"
                         className={inputClass}
                            /> 
                        </div>

                        {/* slot liberi */}
                       {selectedDate && (
                        <div className="mb-6">
                            <label className="block font-medium text-ink mb-2">
                                Orari disponibili
                            </label>
                            {slots.length === 0 ? (
                                <p className="text-sm text-ink/60"> 
                                Nessun orario libero per questa data
                                </p>
                            ) : (
                                <div className="d-flex flex-wrap gap-2">
                                    {slots.map((slot) => (
                                        <button
                                        type="button"
                                        key={slot}
                                        onClick={() => setSelectedSlot(slot)}
                                        className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                                            selectedSlot === slot
                                            ? 'bg-primary text-white border-primary'
                                            : 'bg-white text-primary border-line hover:border-primary'
                                        }`}
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                       )}

                       {/* dati paziente */}
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-ink mb-1">
                       Nome e Cognome *
                            </label>
                            <input type="text"
                            name="clientName"
                            value={form.clientName}
                            onChange={handleInput} 
                            className={inputClass}
                            required 
                            />
                        </div>
            
                        <div>
                            <label className="block text-sm font-medium text-ink mb-1">
                       Email *
                            </label>
                            <input type="text"
                            name="clientEmail"
                            value={form.clientEmail}
                            onChange={handleInput} 
                            className={inputClass}
                            required 
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-ink mb-1">
                       Telefono *
                            </label>
                            <input type="text"
                            name="clientPhone"
                            value={form.clientPhone}
                            onChange={handleInput} 
                            className={inputClass}
                            required 
                            />
                        </div>
                       </div>

                       {/* messaggio esito */}
                       {message && (
                        <div className={`rounded-lg p-3 mb-4 text-sm 
                            ${message.type === 'success' 
                            ? 'bg-green-50 text-green-800 border border-green-200'
                            : 'bg-red-50 text-red-800 border border-red-200'
                            }`}>
                                {message.text}
                        </div>
                       )}

                       <button
                        type="submit"
                        disabled={loading}
                        className="rounded-full bg-primary px-6 py-3 font-medium text-white
                        hover:bg-primary-hover transition-colors disabled:opacity-60">
                       {loading ? 'Invio...' : 'Prenota'}
                        </button> 
                    </form>
                </div>
            </div>
        </section> 
        </>
    )
}
import { useState } from "react"
import api from "../api"

export default function Contact() {
    const [form, setForm] = useState({name: '', email: '', message: ''})
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        try {
            await api.post('/contact', form)
            setFormSubmitted(true)
        } catch (err) {
            setError(err.response?.data?.error || "Errore durante l'invio") 
        } finally {
            setLoading(false)
        }
    }

    return(
        <>
        <section id="contatti" className="py-5 py-lg-6">
            <div className="container py-4">
                <div className="row gy-5">

                    {/* colona sinistra, recapiti */}
                    <div className="col-lg-5">
                        <span className="badge-sage mb-3">
                            Recapiti
                        </span>
                        <h2 className="display-6 mb-4 font-heading">
                        Dove trovarmi
                        </h2>
                        <p className="text-muted mb-4">
                            Ricevo in studio a Milano su appuntamento oppure online tramite videochiamata protetta.
                        </p>

                    <div className="mb-4">
                        <h6 className="font-heading mb-1">
                            Indirizzo Studio
                        </h6>
                       <p className="text-muted mb-0">
                        Via Dante Alighieri 15, 20121 Milano (MI)</p> 
                    </div>

                     <div className="mb-4">
                        <h6 className="font-heading mb-1">
                            Contatto Diretto
                        </h6>
                       <p className="text-muted mb-1">
                       Email: info@mariorossi.it</p> 
                       <p className="text-muted mb-0">
                        Tel: +39 021234567 / +39 3412345678 
                       </p>
                    </div>

                     <div className="mb-4">
                        <h6 className="font-heading mb-1">
                            Orari
                        </h6>
                       <p className="text-muted mb-0">
                        Lunedì - Venerdì: 09:00 - 19:30
                        </p>
                    </div>
                    </div>

                    {/* colonna destra: form */}
                    <div className="col-lg-7">
                        <div className="p-4 p-md-5 bg-white rounded-3 border">
                            <h3 className="h4 mb-4 font-heading">
                            Invia un messaggio
                            </h3>

                            {formSubmitted ? (
                                <div className="alert alert-success" role="alert">
                                    Messaggio inviato con successo. Risponderò entro 24 ore lavorative.
                                    </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label small fw-medium">
                                            Nome e Cognome *
                                            </label>
                                            <input type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleInput}
                                            className="form-control"
                                            required 
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label small fw-medium">
                                           Email *
                                            </label>
                                            <input type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleInput}
                                            className="form-control"
                                            required 
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label small fw-medium">
                                           Messaggio *
                                            </label>
                                            <textarea
                                            name='message'
                                            value={form.message}
                                            onChange={handleInput}
                                            className="form-control"
                                            rows= '4'
                                            required placeholder="Inserisci il tuo messaggio" 
                                            />
                                        </div>

                                        <div className="col-12">
                                            <div className="form-check mb-3">
                                                <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="privacy"
                                                required
                                                />
                                                <label className="form-check-label small text-muted"
                                                htmlFor="privacy">
                                                    Acconsento al trattamento dei dati personali ai sensi del Regolamento GDPR (EU 2016/679).
                                                </label>
                                            </div>

                                            { error && (
                                                <div className="alert alert-danger"
                                                role="alert">
                                                    {error}
                                                </div>
                                            )}

                                            <button 
                                            type="submit"
                                            className="btn btn-primary-custom border-0"
                                            disabled={loading}
                                            >
                                            {loading ? 'Invio...' : 'Invia Messaggio'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
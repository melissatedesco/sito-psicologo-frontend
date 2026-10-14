import { useState } from "react"
import api from '..api/.js'

export default function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
    }

    return(
        <>
        <section id="contatti" className="py-5 py-lg-6 section-alt">
            <div className="container py-4">
                <div className="row gy-5">
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
                                            className="form-control"
                                            required />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label small fw-medium">
                                           Email *
                                            </label>
                                            <input type="email"
                                            className="form-control"
                                            required />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label small fw-medium">
                                            Telefono
                                            </label>
                                            <input type="tel"
                                            className="form-control"
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label small fw-medium">
                                           Messaggio *
                                            </label>
                                            <textarea
                                            className="form-control"
                                            rows= '4'
                                            required placeholder="Inserisci il tuo messaggio" />
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
                                            <button 
                                            type="submit"
                                            className="btn btn-primary-custom border-0">
                                            Invia Messaggio
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
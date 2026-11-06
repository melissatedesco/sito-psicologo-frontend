import { useState } from "react"
import api from "../api"

export default function Contact() {
    const [form, setForm] = useState({name: '', email: '', phone: '', message: ''})
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

    const inputClass = 'w-full rounded-lg border border-line px-3 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'

    return(
        <>
        <section id="contatti" className="py-16 lg:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

                    {/* Recapiti */}
                    <div className="lg:col-span-5">
                        <span className="inline-block rounded-full bg-sage-light border border-sage px-4 
                        py-1.5 text-sm font-medium text-primary mb-4">
                            Recapiti
                        </span>
                        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink mb-6">
                        Dove trovarmi
                        </h2>
                        <p className="text-ink/70 mb-8">
                            Ricevo in studio a Milano su appuntamento oppure online tramite videochiamata protetta.
                        </p>

                    <div className="mb-6">
                        <h6 className="font-serif font-semibold text-ink mb-1">
                            Indirizzo Studio
                        </h6>
                       <p className="text-ink/70">
                        Via Dante Alighieri 15, 20121 Milano (MI)</p> 
                    </div>

                     <div className="mb-6">
                        <h6 className="font-serif font-semibold text-ink mb-1">
                            Contatto Diretto
                        </h6>
                       <p className="text-ink">
                       Email: info@mariorossi.it</p> 
                       <p className="text-ink">
                        Tel: +39 021234567 / +39 3412345678 
                       </p>
                    </div>

                    <div>
                        <h3 className="font-serif font-semibold text-ink mb-1">
                            Orari
                        </h3>
                       <p className="text-ink/70">
                        Lunedì - Venerdì: 09:00 - 19:30
                        </p>
                    </div>
                    </div>

                    {/* form */}
                    <div className="lg:col-span-7">
                        <div className="bg-bg border border-line rounded-2xl p-6 md:p-8">
                            <h3 className="font-serif text-xl font-bold text-ink mb-6">
                            Invia un messaggio
                            </h3>

                            {formSubmitted ? (
                                <div className="rounded-lg bg-green-50 border border-green-200 text-green-800 p-4">
                                    Messaggio inviato con successo. Risponderò entro 24 ore lavorative.
                                    </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-ink mb-1">
                                            Nome e Cognome *
                                            </label>
                                            <input type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleInput}
                                            className={inputClass}
                                            required 
                                            />
                                        </div>

                                        <div>
                                             <label className="block text-sm font-medium text-ink mb-1">
                                           Email *
                                            </label>
                                            <input type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleInput}
                                            className={inputClass}
                                            required 
                                            />
                                        </div>
                                    </div>

                                        <div>
                                            <label className="block text-sm font-medium text-ink mb-1">
                                            Telefono
                                            </label>
                                            <input type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleInput}
                                            className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-ink mb-1">
                                           Messaggio *
                                            </label>
                                            <textarea
                                            name='message'
                                            value={form.message}
                                            onChange={handleInput}
                                            className={inputClass}
                                            rows= '4'
                                            required placeholder="Inserisci il tuo messaggio" 
                                            />
                                        </div>

                                            <label className="flex items-start gap-2 text-sm text-ink/70">
                                                <input
                                                type="checkbox"
                                                required className="mt-1 accent-primary"
                                                />
                                                <span>
                                                    Acconsento al trattamento dei dati personali ai sensi del Regolamento GDPR (EU 2016/679).
                                                </span>
                                            </label>

                                            { error && (
                                                <div className="rounded-lg bg-red-50 border border-red-200 text-red-800 p-3 text-sm">
                                                    {error}
                                                </div>
                                            )}

                                            <button 
                                            type="submit"
                                            disabled={loading}
                                            className="self-start rounded-full bg-primary px-6 py-3 font-medium text-white hover:bg-primary-hover transition-colors disabled:opacity-60 "
                                            >
                                            {loading ? 'Invio...' : 'Invia Messaggio'}
                                            </button>
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
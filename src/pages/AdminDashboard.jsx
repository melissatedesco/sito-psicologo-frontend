import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { removeToken } from "../auth";
import EditModal from "../components/EditModal";

export default function AdminDashboard() {
    const [appuntamenti, setAppuntamenti] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const [editing, setEditing] = useState(null)

    // carica gli appuntamenti all'apertura
    useEffect(() => {
        const loadAppuntamenti = async () => {
            try {
                const res = await api.get('/')
                setAppuntamenti(res.data)
            } catch (err) {
                // token scaduto o non valido, ritorna al login
                if (err.response?.status === 401 || err.response?.status === 403) {
                    removeToken()
                    navigate('/admin/login')
                } else {
                    setError('Errore nel caricamento degli appuntamenti')
                }
            } finally {
                setLoading(false)
            }
        }
        loadAppuntamenti()
    }, [navigate])

    const handleDelete =async (id) => {
        if (!confirm('Eliminare questo appuntamento?'))
            return
        try {
            await api.delete(`/${id}`)
            setAppuntamenti(appuntamenti.filter((a) => a.id !== id))
        } catch {
            alert('Errore durante l\'eliminazione')
        }
    }

    const handlePaymentLink = async (id) => {
        const amount = prompt('Importo della seduta in euro (es.50):')
        if (!amount) return
        try {
            const res = await api.post(`/pagamento/${id}/link`, { amount: Number(amount.replace(',', '.'))})
            // apre la pagina Stripe in una nuova scheda
            window.open(res.data.url, '_blank')
            // copia il link negli appunti e lo mostra
            navigator.clipboard?.writeText(res.data.url)
            alert('Link di pagamento creato e copiato negli appunti:\n\n' + res.data.url)
        } catch {
            alert('Errore nella creazione del link')
        }
    }

    const handleMarkPaid = async (id) => {
        try {
            const res =await api.patch(`/pagamento/${id}/paid`)
            setAppuntamenti(appuntamenti.map((a) => (a.id === id ? res.data.appuntamento : a)))
        } catch {
            alert('Errore nel segnare come pagato')
        }
    }

    const handleSaved = (update) => {
        setAppuntamenti(appuntamenti.map((a) => (a.id === update.id ? update : a)))
    }

    const handleLogout = () => {
        removeToken()
        navigate('/admin/login')
    }

    return (
        <>
        <div className="min-h-screen bg-bg">

            {/* Header */}
            <header className="bg-white border-b border-line">
                <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="font-serif text-xl font-bold text-ink">
                        Gestione Appuntamenti
                    </h1>
                    <button
                    onClick={handleLogout}
                    className="text-sm text-ink/60 hover:text-primary transition-colors"
                    >
                    Esci
                    </button>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8">
                {loading ? (
                    <p className="text-ink/60">
                        Caricamento...
                    </p>
                    ) : error ? (
                        <p className="text-red-700">
                            {error}
                        </p>
                    ) : appuntamenti.length === 0 ? (
                        <p className="text-ink/60">
                            Nessun appuntamento
                        </p>
                    ) : (
                    <div className="bg-white border border-line rounded-2xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-sage-light text-ink">
                                <tr>
                                    <th className="text-left px-4 py-3">Data</th>
                                    <th className="text-left px-4 py-3">Ora</th>
                                    <th className="text-left px-4 py-3">Paziente</th>
                                    <th className="text-left px-4 py-3">Contatti</th>
                                    <th className="text-left px-4 py-3">Pagamento</th>
                                    <th className="text-left px-4 py-3">Azioni</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appuntamenti.map((a) => (
                                    <tr key={a.id}
                                    className="border-t border-line">
                                        <td className="px-4 py-3 whitespace-nowrap">{a.date}</td>
                                        <td className="px-4 py-3">{a.startTime}</td>
                                        <td className="px-4 py-3">{a.clientName}</td>
                                        <td className="px-4 py-3 text-ink/70">
                                            {a.clientEmail}<br />{a.clientPhone}
                                        </td>
                                    <td className="px-4 py-3">
                                        {a.paid ? (
                                            <span className="inline-block rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-medium">
                                                Pagato
                                            </span>
                                        ) : (
                                            <span className="inline-block rounded-full bg-ink/10 text-ink/60 px-3 py-1 text-xs font-medium">
                                                Non pagato
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2 whitespace-nowrap">
                                        <button
                                        onClick={() => setEditing(a)}
                                        className="rounded-lg border border-line px-3 py-1.5 text-xs font-medium text-ink hover:bg-sage-light transition-colors"
                                        >
                                        Modifica
                                        </button>
                                        <button onClick={() => handlePaymentLink(a.id)}
                                            className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-hover transition-colors">
                                                Link pagamento
                                        </button>
                                        {!a.paid && (
                                            <button onClick={() => handleMarkPaid(a.id)}
                                            className="rounded-lg border border-green-600 px-3 py-1.5 text-xs font-medium text-green-700 hover:bg-green-700 hover:text-white transition-colors">
                                                Segna pagato
                                            </button>
                                    )}
                                        <button
                                        onClick={() => handleDelete(a.id)}
                                        className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors">
                                            Elimina
                                        </button>
                                        </div>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    )
                }
            </main>

            {editing && (
                <EditModal
                    appuntamento={editing}
                    onClose={() => setEditing(null)}
                    onSaved={handleSaved}
                />
            )}
        </div>
        </>
    )
}
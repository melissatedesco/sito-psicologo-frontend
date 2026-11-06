import { useState } from "react";
import api from "../api";

export default function EditModal({appuntamento, onClose, onSaved}) {
    const [form, setForm] = useState({
        date:appuntamento.date,
        startTime: appuntamento.startTime,
        clientName: appuntamento.clientName,
        clientEmail: appuntamento.clientEmail,
        clientPhone: appuntamento.clientPhone
    })
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
            const res = await api.put(`/${appuntamento.id}`, form)
            // aggiorna la lista nella dashboard
            onSaved(res.data.appuntamento)
            onClose()
        } catch (err) {
            setError(err.response?.data?.error || 'Errore durante il salvataggio')
        } finally {
            setLoading(false)
        }
    }

    const inputClass = 'w-full rounded-lg border border-line px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary'

    return (
        <>
        {/* sfondo scuro che copre la pagina */}
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">

        {/* riquadro della modale */}
        <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h2 className="font-serif text-xl font-bold text-ink mb-4">
                Modifica appuntamento
            </h2>

            <form onSubmit={handleSubmit}
            className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block text-sm font-medium text-ink mb-1">
                    Data
                    </label>
                    <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleInput}
                    className={inputClass}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-ink mb-1">
                    Ora
                    </label>
                    <input
                    type="text"
                    name="startTime"
                    value={form.startTime}
                    onChange={handleInput}
                    className={inputClass}
                    placeholder="HH:mm"
                    />
                </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-ink mb-1">
                    Nome Cognome
                    </label>
                    <input
                    type="text"
                    name="clientName"
                    value={form.clientName}
                    onChange={handleInput}
                    className={inputClass}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-ink mb-1">
                    Email
                    </label>
                    <input
                    type="text"
                    name="clientEmail"
                    value={form.clientEmail}
                    onChange={handleInput}
                    className={inputClass}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-ink mb-1">
                    Telefono
                    </label>
                    <input
                    type="text"
                    name="clientPhone"
                    value={form.clientPhone}
                    onChange={handleInput}
                    className={inputClass}
                    />
                </div>

                {error && (
                    <div className="rounded-lg bg-red-50 border border-red-200 text-red-800 p-3 text-sm">
                        {error}
                    </div>
                )}

                <div className="flex gap-3 justify-end mt-2">
                    <button type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-ink/70 hover:text-ink">
                        Annulla
                    </button>
                    <button type="submit"
                    disabled={loading}
                    className="rounded-full bg-primary px-5 py-2 font-medium text-white hover:bg-primary-hover
                    disabled:opacity-60">
                        {loading ? 'Salvataggio' : 'Salva'}
                    </button>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"
import { saveToken } from "../auth";

export default function AdminLogin() {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        try {
            const res = await api.post('/auth/login', {identifier, password})
            saveToken(res.data.token)
            navigate('/admin')
        } catch (err) {
            setError(err.response?.data?.error || 'Credenziali non valide')
        } finally {
            setLoading(false)
        }
    }
    
    const inputClass = 'w-full rounded-lg border border-line px-3 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
    
    return (
        <>
        <div className="min-h-screen flex items-center justify-center px-4">
           <form onSubmit={handleSubmit}
           className="w-full max-w-sm bg-white border border-line rounded-2xl p-8">
            <h1 className="font-serif text-2xl font-bold text-ink mb-6 text-center">
                Area Riservata
            </h1>

            <div className="mb-4">
                <label className="block text-sm font-medium text-ink mb-1">
                Username o email
                </label>
                <input 
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className={inputClass}
                required
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-ink mb-1">
                    Password
                </label>
                <input 
                type="password"
                value={password}
                onChange={(e) => setPassword (e.target.value)}
                className={inputClass}
                required
                />
            </div>

            {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 text-red-800 p-3 text-sm mb-4">
                    {error}
                    </div>
            )}

            <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-primary px-6 py-3 font-medium text-white hover:bg-primary-hover
            transition-colors disabled:opacity-60">
                {loading ? 'Accesso..' : 'Accedi'}
            </button>
            </form>
        </div>
        </>
    )
}
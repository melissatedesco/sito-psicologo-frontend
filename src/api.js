import axios from "axios";
import { getToken } from "./auth";

// un'istanza axios con l'URL base del backend
// in produzione si imposta VITE_API_URL nel file .env.production (vedi .env.example)
const api= axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
})

// prima di ogni richiesta, se c'è un token lo aggiunge nell'header Authorization
api.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers.Authorization= `Bearer ${token}`
    }
    return config
})

export default api
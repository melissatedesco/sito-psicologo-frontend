import axios from "axios";

// un'istanza axios con l'URL base del backend
// quando si fa il deploy, cambiare solo questo valore, oppure usare una env in vite
const api= axios.create({
    baseURL: 'http://localhost:5000/api'
})

export default api
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AdminLogin from "./pages/AdminLogin"
import ProtectedRoute from "./components/ProtectedRoute"
import AdminDashboard from "./pages/AdminDashboard"
import PagamentoOk from "./pages/PagamentoOk"
import PagamentoAnnullato from "./pages/PagamentoAnnullato"
import GestioneAppuntamento from "./pages/GestioneAppuntamento"

function App() {
 
  return (
     <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
    <Route path="/" element={<Home />} />  
    <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/pagamento-ok" element={<PagamentoOk/>} />
      <Route path="/pagamento-annullato" element={<PagamentoAnnullato />} />
      <Route path="/gestione/:token" element={<GestioneAppuntamento />} />
    <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      }
    />
      </Routes> 
     </BrowserRouter>
  )
}

export default App

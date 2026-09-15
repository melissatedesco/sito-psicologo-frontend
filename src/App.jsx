import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Method from "./components/Method"
import Booking from "./components/Booking"
import Footer from "./components/Footer"

function App() {
 
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Hero />
      <div className="section-divider"></div>
      <About/>
      <div className="section-divider"></div>
      <Services/>
      <div className="section-divider"></div>
      <Method/>
      <div className="section-divider"></div>
      <Booking/>
          <div className="section-divider"></div>
    <Footer/>
    </div>
     
    </>
  )
}

export default App

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Method from "./components/Method"
import Booking from "./components/Booking"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

function App() {
 
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Method/>
      <Booking/>
      <Contact/>
    <Footer/>
    </div>
     
    </>
  )
}

export default App

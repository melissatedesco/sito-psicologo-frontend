import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Method from "../components/Method"
import Booking from "../components/Booking"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Method />
            <Booking />
            <Contact />
            <Footer />
        </div>
    )
}
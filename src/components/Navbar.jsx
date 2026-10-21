import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const menuItems = [
        {name: 'Chi Sono', href: '#chi-sono'},
        {name: 'Aree di Intervento', href: '#aree-intervento'},
        {name: 'Come Lavoro', href: '#come-lavoro'},
        {name: 'Contatti', href: '#contatti'}
    ]

    return (
        <>
        <nav className="sticky top-0 z-50 bg-bg border-b border-line shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                {/* Brand */}
                <a href="#" className="font-serif text-xl font-bold text-ink">
                    Dr. Mario Rossi
                </a>

                {/* Menu desktop */}
                <div className="hidden lg:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-ink hover:text-primary transition-colors"
                        >
                            {item.name}

                        </a>
                    ))}
                    <a 
                    href="#prenota"
                    className="rounded-full bg-primary px-5 py-2 text-sm font-medium
                    text-white hover:bg-primary-hover transition-colors">
                        Prenota un colloquio
                    </a>
                </div>

                    {/* bottone menu mobile */}
               <button 
               onClick={() => setOpen(!open)}
               className="lg:hidden p-2 text-ink"
               aria-label="Apri menu">
                <svg width="24" height="24" fill="none" stroke="currentColor"
                strokeWidth="2" viewBox="0 0 24 24">
                 <line x1="3" y1="6" x2="21" y2="6" />
                 <line x1={3} y1={12} x2={21} y2={12} />
                 <line x1={3} y1={18} x2={21} y2={18}/> 
                </svg>
                    </button>
                </div> 

                {/* menu mobile a tendina */}
                {open && (
                    <div className="lg:hidden pb-4 flex flex-col gap-3">
                        {menuItems.map((item) => (
                            <a 
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="text-sm font-medium text-ink hover:text-primary">
                                {item.name}
                            </a>
                        ))}
                        <a 
                        href="#prenota"
                        onClick={() => setOpen(false)}
                        className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white text-center">
                            Prenota un colloquio
                        </a>
                       </div> 
                )}
            </div>
        </nav>
        </>
    )
}
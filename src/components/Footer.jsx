export default function Footer() {
    return (
        <>
        <footer className="mt-auto border-t border-line  bg-white">
            <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* sinistra: nome + dati legali */}
                <div className="text-center md:text-left">
                    <p>
                    <span className="font-serif font-bold text-ink">
                    Dr. Mario Rossi
                    </span>
                    <span className="text-ink/60">
                    | Psicologo e Psicoterapeuta
                    </span>
                    </p>
                    <p className="text-sm text-ink/60 mt-1">
                        Iscritto all'Albo degli Psicologi Lombardia N. 123456 - P.IVA 123456678998
                    </p>
                </div>

                {/* destra: link + copyright */}
                <div className="text-center md:text-right">
                    <ul className="flex justify-center md:justify-end gap-4 text-sm">
                        <li><a href="#" 
                        className="text-ink/60 hover:text-primary transition-colors">
                            Privacy Policy
                            </a>
                        </li>
                        <li><a href="#" 
                        className="text-ink/60 hover:text-primary transition-colors">
                            Cookie Policy
                            </a>
                        </li>
                          <li><a href="#" 
                        className="text-ink/60 hover:text-primary transition-colors">
                            Note Legali
                            </a>
                        </li>
                    </ul>
                    <p className="text-sm text-ink/60 mt-2">
                    &copy; {new Date().getFullYear()} Dr. Mario Rossi. Tutti i diritti riservati.
                    </p>
                </div>
            </div>
            </div>
        </footer>
        </>
    )
}
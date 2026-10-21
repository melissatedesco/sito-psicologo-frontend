export default function About() {
    return (
        <>
        <section id="chi-sono" 
        className="py-16 lg:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        
                        {/* immagine */}
                    <div className="lg:col-span-5">
                        <img 
                       src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                        alt="Studio professionale" 
                        className="block w-full aspect-[4/5] object-cover rounded-2xl shadow-sm"
                        />
                        </div>

                        {/* testo */}
                        <div className="lg:col-span-7">
                            <span className="inline-block rounded-full bg-sage-light border border-sage
                            px-4 py-1.5 text-sm font-medium text-primary mb-4">
                            Chi Sono
                            </span>

                            <h2 className="font-serif text-3xl lg:text-4xl font-bold text.ink mb-6">
                                Sono il Dr. Mario Rossi
                            </h2>

                            <p className="text-ink/70 mb-4">
                                Sono Psicologo e Psicoterapeuta iscritto all'Ordine degli Psicologi.
                                Da oltre dieci anni accompagno le persone nella comprensione del proprio mondo
                                emotivo e nello sviluppo di risorse personali.
                            </p>

                            <p className="text-ink/70 mb-8">
                                Credo fortemente nell'importanza di una relazione terapeutica basata sull'empatia,
                                sull'autenticità e sulla trasparenza. Ogni percorso viene personalizzato su misura.
                            </p>

                           <div className="border-l-4 border-primary pl-4">
                            <h3 className="font-serif text-base font-smibold text-ink mb-1">
                                Iscrizione Albo
                            </h3>
                           <p className="text-sm text-ink/70">
                            Iscritto all'Albo degli Psicologi della Regione Lombardia n. 123456
                            </p> 
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
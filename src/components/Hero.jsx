export default function Hero() {
    return (
        <>
        <section className='py-16 lg:py-24'>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

                    {/* testo */}
                    <div className=" lg:col-span-7">
                        <span className="inline-block rounded-full bg-sage-light border border-sage px-4 py-1.5
                        text-sm font-medium text-primary mb-4">
                            Psicologo &amp; Psicoterapeuta
                        </span>

                        <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-ink mb-6">
                            Un percorso di ascolto per ritrovare equilibrio e benessere.
                        </h1>

                        <p className="text-lg text-ink/70 max-w-xl mb-8">
                            Offro uno spazio protetto, accogliente e non giudicante per affrontare 
                            momenti di ansia, difficoltà relazionali, transizioni di vita e crescita personale.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                            href="#prenota" 
                            className="rounded-full bg-primary px-6 py-3 text-center font-medium text-white 
                           hover:bg-primary-hover transition-colors">
                                Prenota un colloquio
                            </a>
                            <a 
                            href="#chi-sono" 
                            className="rounded-full border border-line px-6 py-3 text-center font-medium
                            text-ink hover:bg-sage-light transition-colors">
                                Scopri il mio approccio
                            </a>
                        </div>
                    </div>

                    {/* Immagine */}
                    <div className="lg:col-span-5">
                        <img
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                        alt="Dr. Mario Rossi"
                        className="w-full aspect-[4/5] object-cover rounded-2xl shadow-sm" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
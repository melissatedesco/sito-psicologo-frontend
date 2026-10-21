export default function Method() {
    const steps = [
        {num: '01', title: 'Primo Colloquio conoscitivo', desc: 'Un primo incontro per esporre la situazione, valutare il bisogno e comprendere se il mio approccio fa al caso tuo.'},
        {num: '02', title: 'Definizione degli obiettivi', desc: 'Stabiliamo insieme gli obiettivi del percorso e concordiamo la frequenza degli appuntamenti.'},
        {num: '03', title: 'Fase Attiva di Lavoro', desc: 'Attraverso il dialogo e tecniche specifiche, lavoriamo sui blocchi emotivi e sulle risorse personali.'},
        {num: '04', title: 'Verifica dei Risultati e Conclusione', desc: 'Valutiamo costantemente i progressi fino al raggiungimento della piena autonomia personale.'},
    ]

    return (
        <>
        <section id="come-lavoro" className="py-16 lg:py-24 bg-white">
            <div className="maz-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

                    {/* colonna sinistra: intro */}
                    <div className="lg:col-span-5">
                        <span className="inline-block rounded-full bg-sage-light border border-sage px-4 py-1.5 text-sm font-medium text-primary mb-4">
                        Metodologia
                        </span>
                        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink mb-6">
                        Cosa aspettarsi del percorso
                        </h2>
                        <p className="text-ink/70 mb-6">
                        Iniziare un percorso psicologico è un atto di grande responsabilità verso se stessi.
                        Il lavoro è totalmente collaborativo e orientato al tuo benessere.
                        </p>
                        <div className="bg-sage-light border-1-4 border-primary rounded-r-lg p-4">
                        <p className= "italic text-ink/80 text-sm">
                            "Ogni colloquio si svolge nel rispetto del segreto professionale e del 
                            Codice Deontologico degli Psicologi Italiani."
                        </p>
                        </div>
                    </div>

                    {/* colonna destra: i passi */}
                   <div className="lg:col-span-7">
                       <div className="flex flex-col gap-6"> 
                    {steps.map((step) => (
                        <div key={step.num}
                            className="d-flex gap-4"
                        >
                            <div className="font-serif text-2xl font-bold text-primary shrink-0"> 
                                {step.num} 
                                </div>
                                <div>
                                <h3 className="font-serif text-lg font-semibold text.ink mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-ink/70">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    </div>
</section>
</>
    )
}
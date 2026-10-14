export default function Method() {
    const steps = [
        {num: '01', title: 'Primo Colloquio conoscitivo', desc: 'Un primo incontro per esporre la situazione, valutare il bisogno e comprendere se il mio approccio fa al caso tuo.'},
        {num: '02', title: 'Definizione degli obiettivi', desc: 'Stabiliamo insieme gli obiettivi del percorso e concordiamo la frequenza degli appuntamenti.'},
        {num: '03', title: 'Fase Attiva di Lavoro', desc: 'Attraverso il dialogo e tecniche specifiche, lavoriamo sui blocchi emotivi e sulle risorse personali.'},
        {num: '04', title: 'Verifica dei Risultati e Conclusione', desc: 'Valutiamo costantemente i progressi fino al raggiungimento della piena autonomia personale.'},
    ]

    return (
        <>
        <section id="come-lavoro" className="py-5 py-lg-6 section-alt">
            <div className="container py-4">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-5">
                        <span className="badge-sage mb-3">
                        Metodologia
                        </span>
                        <h2 className="display-6 mb-4 font-heading">
                        Cosa aspettarsi del percorso
                        </h2>
                        <p className="text-muted mb-4">
                        Iniziare un percorso psicologico è un atto di grande responsabilità verso se stessi.
                        Il lavoro è totalmente collaborativo e orientato al tuo benessere.
                        </p>
                        <div className="p-4 rounded-3 method-box">
                        <p className= "fst-italic mb-0">
                            "Ogni colloquio si svolge nel rispetto del segreto professionale e del Codice Deontologico degli Psicologi Italiani."
                        </p>
                        </div>
                    </div>

                   <div className="col-lg-7 ps-lg-5">
                    {steps.map((step) => (
                        <div className="d-flex mb-4"
                        key={step.num}>
                            <div className="me-3 fw-bold fs-4" style={{ color: 'var(--primary-color)' }}> {step.num} </div>
                            <div> 
                                <h4 className="h5 mb-2 font-heading">{step.title}</h4>
                                <p className="text-muted mb-0">{step.desc}</p>
                            </div>
                            </div>
                    ))}
                    </div> 
                </div>
            </div>
        </section>
        </>
    )
}
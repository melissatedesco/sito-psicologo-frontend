export default function About() {
    return (
        <>
        <section id="chi-sono" className="py-5 py-lg-6">
            <div className="container py-4">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-5">
                        <img 
                       src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                        alt="Studio professionale" 
                        className="img-fluid rounded-3"
                        />
                        </div>
                        <div className="col-lg-7 ps-lg-5">
                            <span className="badge-sage mb-3">
                            Chi Sono
                            </span>
                            <h2 className="display-6 mb-4 font-heading">
                                Sono il Dr. Mario Rossi
                            </h2>
                            <p className="mb-3 text-muted">
                                Sono Psicologo e Psicoterapeuta iscritto all'Ordine degli Psicologi.
                                Da oltre dieci anni accompagno le persone nella comprensione del proprio mondo
                                emotivo e nello sviluppo di risorse personali.
                            </p>
                            <p className="mb-4 text-muted">
                                Credo fortemente nell'importanza di una relazione terapeutica basata sull'empatia,
                                sull'autenticità e sulla trasparenza. Ogni percorso viene personalizzato su misura.
                            </p>

                           <div className="col-sm-6">
                            <h6 className="font-heading mb-1">
                                Iscrizione Albo
                            </h6>
                           <p className="small text-muted mb-0">
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
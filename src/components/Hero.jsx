export default function Hero() {
    return (
        <>
        <section className='py-5 py-lg-6 my-auto'>
            <div className="container py-4">
                <div className="row align-items-center gy-5">
                    <div className="col-lg-7">
                        <span className="badge-sage mb-3">
                            Psicologo &amp; Psicoterapeuta
                        </span>

                        <h1 className="display-4 mb-4 font-heading lh-sm">
                            Un percorso di ascolto per ritrovare equilibrio e benessere.
                        </h1>

                        <p className="lead text-muted mb-4 fs-5"
                        style={{ maxWidth: '600px'}}>
                            Offro uno spazio protetto, accogliente e non giudicante per affrontare 
                            momenti di ansia, difficoltà relazionali, transazioni di vita e crescita personale.
                        </p>

                        <div className="d-flex flex-column flex-sm-row gap-3">
                            <a href="#prenota" className="btn-primary-custom text-center">
                                Prenota un colloquio
                            </a>
                            <a href="#chi-sono" className="btn-outline-custom text-center">
                                Scopri il mio approccio
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <img
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                        alt="Dr. Maria Rossi"
                        className="img-fluid rounded-4 shadow-sm w-100"
                        style={{ objectFit: 'cover', maxHeight:'500px'}}
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
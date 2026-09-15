export default function Services() {
    const services= [
    { num: '01', title: 'Ansia e Attacchi di Panico', text: 'Gestione dei sintomi ansiosi, preoccupazioni eccessive, fobie e stati di agitazione continua.' },
    { num: '02', title: 'Depressione e Umore', text: 'Percorsi orientati a superare stati di tristezza prolungata, mancanza di motivazione e apatia.' },
    { num: '03', title: 'Terapia di Coppia', text: 'Supporto nella risoluzione dei conflitti relazionali, miglioramento della comunicazione e gestione delle crisi.' },
    { num: '04', title: 'Supporto Adolescenti', text: "Spazio d'ascolto per ragazzi durante le fasi di transizione evolutiva, difficoltà scolastiche o relazionali." },
    { num: '05', title: 'Stress & Burnout', text: "Interventi mirati alla prevenzione e gestione del sovraccarico lavorativo ed emotivo." },
    { num: '06', title: 'Autostima e Crescita', text: 'Percorsi di self-empowerment per migliorare la percezione di sé, la sicurezza nelle proprie decisioni e la consapevolezza.' }
    ]

    return(
        <>
        <section id="aree-intervento" className="py-5 py-lg-6">
            <div className="container py-4">
                <div className="text-center mx-auto mb-5"
                style={{maxWidth: '650px'}}>
                    <span className="badge-sage mb-3">
                        Specializzazioni
                    </span>
                    <h2 className="display-6 font-heading">
                        Aree di intervento
                    </h2>
                    <p className="text-muted">
                        Le principali tematiche affrontate in studio o tramite consulenza online.
                    </p>
                </div>

                <div className="row g-4">
                {services.map((s) => (
                    <div className="col-md-6 col-lg-4" 
                    key={s.num}>
                        <div className="service-card">
                            <div className="service-icon mb-3">{s.num}</div>
                            <h4 className="h5 mb-3 font-heading">
                                {s.title}
                            </h4>
                            <p className="text-muted mb-0">
                                {s.text}
                            </p>
                            </div>
                        </div>
                ))}
                </div>
            </div>
        </section>
        </>
    )
}
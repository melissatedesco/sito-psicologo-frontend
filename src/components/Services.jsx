export default function Services() {
    const services= [
    { title: 'Ansia e Attacchi di Panico', text: 'Gestione dei sintomi ansiosi, preoccupazioni eccessive, fobie e stati di agitazione continua.' },
    { title: 'Depressione e Umore', text: 'Percorsi orientati a superare stati di tristezza prolungata, mancanza di motivazione e apatia.' },
    { title: 'Terapia di Coppia', text: 'Supporto nella risoluzione dei conflitti relazionali, miglioramento della comunicazione e gestione delle crisi.' },
    { title: 'Supporto Adolescenti', text: "Spazio d'ascolto per ragazzi durante le fasi di transizione evolutiva, difficoltà scolastiche o relazionali." },
    { title: 'Stress & Burnout', text: "Interventi mirati alla prevenzione e gestione del sovraccarico lavorativo ed emotivo." },
    { title: 'Autostima e Crescita', text: 'Percorsi di self-empowerment per migliorare la percezione di sé, la sicurezza nelle proprie decisioni e la consapevolezza.' }
    ]

    return(
        <>
        <section id="aree-intervento" className="py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4">

                {/* intestazione */}
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <span className="inline-block rounded-full bg-sage-light border border-sage px-4 py-1.5 text-sm
                    font-medium text-primary mb-4">
                        Specializzazioni
                    </span>
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink mb-4">
                        Aree di intervento
                    </h2>
                    <p className="text-ink/70">
                        Le principali tematiche affrontate in studio o tramite consulenza online.
                    </p>
                </div>

                {/*griglia card  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s) => (
                    <div
                        key={s.title}
                        className="bg-white border border-line rounded-2xl p-6 transition-shadow hover:shadow-md">
                    
                            <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                                {s.title}
                            </h3>
                            <p className="text-sn text-ink/70">
                                {s.text}
                            </p>
                        </div>
                ))}
                </div>
            </div>
        </section>
        </>
    )
}
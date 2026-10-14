export default function Footer() {
    return (
        <>
        <footer className="mt-auto py-4 bg-white border-top">
            <div className="container">
            <div className="row gy-3 align-items-center">
                <div className="col-md-6 text-center text-md-start">
                    <span className="fw-bold font-heading">
                    Dr. Mario Rossi
                    </span>
                    <span className="text-muted ms-2">| Psicologo e Psicoterapeuta </span>
                    <p className="small text-muted mb-0 mt-1">
                        Iscritto all'Albo degli Psicologi Lombardia N. 123456 - P.IVA 123456678998
                    </p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <ul className="list-inline mb-0 small">
                        <li className="list-inline-item">
                            <a href="#" className="text-muted text-decoration-none">
                            Privacy Policy
                            </a>
                        </li>
                        <li className="list-inline-item ms-3">
                            <a href="#" className="text-muted text-decoration-none">
                            Cookie Policy
                            </a>
                        </li>
                         <li className="list-inline-item ms-3">
                            <a href="#" className="text-muted text-decoration-none">
                            Note Legali
                            </a>
                        </li>
                    </ul>
                    <p className="small text-muted mb-0 mt-1">
                    &copy; {new Date().getFullYear()} Dr. Mario Rossi. Tutti i diritti riservati.
                    </p>
                </div>
            </div>
            </div>
        </footer>
        </>
    )
}
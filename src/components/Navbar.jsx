export default function Navbar() {
    const menuItems = [
        {name: 'Chi Sono', href: '#chi-sono'},
        {name: 'Aree di Intervento', href: '#aree-intervento'},
        {name: 'Come Lavoro', href: '#come-lavoro'},
        {name: 'Contatti', href: '#contatti'}
    ]

    return (
        <>
        <nav className="navbar navbar-expand-lg sticky-top custom-navbar py-3">
            <div className="container">
                <a className="navbar-brand font-heading fs-4 fw-bold" href="#">
                    Dr. Mario Rossi
                </a>

                <button className="navbar-toggler border-0"
                type="button"
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'>

                    <span className="navbar-toggler-icon" />
                </button>

               <div className="collapse navbar-collapse" id='navbarNav'>
                <ul className="navbar-nav ms-auto align-items-lg-center">
                    {menuItems.map((item) => (
                      <li className="nav-item mx-2" key={item.name}>
                        <a className="custom-nav-link" href={item.href}>
                            {item.name}
                        </a>
                      </li>  
                    ))}
                    <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                        <a className="btn-primary-custom btn-sm" href="#prenota">
                            Prenota un colloquio
                        </a>
                    </li>
                </ul>
                </div> 
            </div>
        </nav>
        </>
    )
}
export default function HostNavbar() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-iteme">
                                <a className="nav-link  text-white" aria-current="page" href="/host">Host</a>
                            </li>
                            <li className="nav-iteme">
                                <a className="nav-link  text-white" href="/host/reviews">Reviews</a>
                            </li>
                            <li className="nav-iteme">
                                <a className="nav-link  text-white" href="/host/income">Income</a>
                            </li>
                            <li className="nav-iteme">
                                <a className="nav-link  text-white" href="/host/vans">Vans</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
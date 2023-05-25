import CartWidget from "./CartWidget";
const LogoMatePava = "assets/images/favimate.png"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src={LogoMatePava} alt="logo mate" width={45} />
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Destacados</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Mates</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Termos</a>
                </li>
            </ul>
            </div>
            <div className="p-3">
            <CartWidget />
            </div>
        </div>
        </nav>
    );
};

export default NavBar;

import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
const LogoMatePava = "/assets/images/logo 2.png"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to = {"/"}>
            <img src={LogoMatePava} alt="logo mate" width={150} />
            </NavLink>
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
            <ul className="navbar-nav mx-auto fs-3">
                <li className="nav-item">
                <NavLink to= {"/destacados"} className="nav-link text-dark" aria-current="page" >Destacados</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to= {"/category/Mate"} className="nav-link text-dark">Mates</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to= {"/category/Matera"} className="nav-link text-dark">Materas</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to= {"/category/Set asado"} className="nav-link text-dark">Todo para el Asado</NavLink>
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

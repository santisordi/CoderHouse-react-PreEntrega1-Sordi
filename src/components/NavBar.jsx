import CartWidget from "./CartWidget";
import LogoMatePava from "./images/favimate.png";


const NavBar = () => {
    return (
        <div className="container-fluid bg-body-tertiary">
            <div className="row ">
                <div className="col text-start p-2 ">
                    <img src={LogoMatePava} alt="logo mate" width={45}/>
                </div>
                <div className="col ">
                    <ul className="nav justify-content-center py-3">
                        <li className="nav-item">
                            <a className="nav-link active text-dark" aria-current="page" href="#"><b>Destacados</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#"><b>Mates</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#"><b>Termos</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#"><b>Equipos Materos</b></a>
                        </li>
                    </ul>
                </div>
                <div className="col text-end p-3">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

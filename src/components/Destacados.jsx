import { NavLink } from "react-router-dom";
const LogoMatePava = "/assets/images/logo 2.png"


const Destacados = ()=> {
    return (
        <div className="container-fluid">
            <div className="col">
                <div className="row bg-dark text-light">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner text-cener text-center ">
                            <div className="carousel-item active my-2">
                            3 cuotas sin interes
                            <p><NavLink>Ver opciones de pago</NavLink> </p>
                            
                            </div>
                                <div className="carousel-item">
                                Envios a todo el pais
                                <p><NavLink>Ver información de envíos y entregas</NavLink></p> 
                                </div>
                                <div className="carousel-item">
                                Todo lo que buscas en Articulos regionales
                                <p></p>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                    </div>
                </div>
                <div className="row " width={100}>
                    <img src={LogoMatePava} alt={"Logo mate"}  />
            
                </div> 
        </div>
        //despues puedo cargar otro destacado aca
    )
}

export default Destacados;
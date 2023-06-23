import { useParams, useLocation  } from "react-router-dom";
import Swal from 'sweetalert2';

const FinalPag = () => {

    const location = useLocation();
    const {orderId} = useParams ();
    const { nombre, email, telefono } = location.state || {};

    const mostrarAlerta = () => {
        new Swal({
            title: `Gracias por tu compra ${nombre}!

            A la brevedad nos estaremos comunicando al email: ${email} 
            
            O a tu telefono: ${telefono}`,
            
            text: `Orden n°: ${orderId}`,
            icon: "success",
            confirmButtonText: "Volver al inicio"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/";
            }
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">   
                    {mostrarAlerta()}
                </div>
            </div>
        </div>
    )
}

export default FinalPag;

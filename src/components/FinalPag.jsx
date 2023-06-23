import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const FinalPag = () => {

    const {orderId} = useParams ();
    const mostrarAlerta = () => {
        new Swal({
            title: `Gracias por tu compra `,
            text: `ID de orden: ${orderId}`,
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

import { useState } from "react";

const Checkout = () => {
    const [nombre, setnombre] = useState("");
    const [email, setemail] = useState("");
    const [telefono, settelefono] = useState("");

     
    
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 off-set-md2">

                </div>
                <div className="col-md-4">
                <form>
                <div class="mb-3">
                    <label for="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3 form-check">
                    <input type="number" className="form-control" />
                    <label className="form-label" for="telefono">Telefono</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
</form>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
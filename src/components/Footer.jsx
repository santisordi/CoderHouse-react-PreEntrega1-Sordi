import FaceBook from "./images/facebook.svg"
import Instagram from "./images/instagram.svg"
import WhatsApp from "./images/whatsapp.svg"

const Footer = ()=> {
    return (
        <div className="container-fluid text-dark bg-body-tertiary py-4">
            <div className="row">
                <div className="col text-center">
                    Ayuda
                </div>
                <div className="col text-center">
                    <a href="https://web.whatsapp.com/" className="me-3"><img src={WhatsApp} alt="whatsapp" width={20}/></a>
                    <a href="https://www.instagram.com/" className="me-3"><img src={Instagram} alt="Instagram" width={20}/></a>
                    <a href="https://www.facebook.com/" className="me-3"><img src={FaceBook} alt="FaceBook" width={20}/></a>
                </div>
            </div>

        </div>
    )
}

export default Footer
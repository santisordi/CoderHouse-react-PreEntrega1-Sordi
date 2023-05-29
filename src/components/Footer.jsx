import { Link } from "react-router-dom"

const faceBookImg= "/assets/images/facebook.svg"
const instaImg= "/assets/images/instagram.svg"
const whatsImg= "/assets/images/facebook.svg"

const Footer = ()=> {
    return (
        <div className="container-fluid text-dark bg-body-tertiary py-4">
            <div className="row">
                <div className="col text-center">
                    Ayuda
                </div>
                <div className="col text-center">
                    <Link to ={ "/" } href="https://web.whatsapp.com/" className="me-3"><img src={whatsImg} alt="whatsapp" width={20}/></Link>
                    <Link to ={ "/" } href="https://www.instagram.com/" className="me-3"><img src={instaImg} alt="Instagram" width={20}/></Link>
                    <Link to ={ "/" } href="https://www.facebook.com/" className="me-3"><img src={faceBookImg} alt="FaceBook" width={20}/></Link>
                </div>
            </div>

        </div>
    )
}
    
export default Footer
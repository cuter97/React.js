import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBeer} from '@fortawesome/free-solid-svg-icons';
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";

import myImg from '../style/imagenes/logo_footer_1.png'

// const instagram = <ImInstagram icon={ImInstagram} />
// const facebook = <ImFacebook icon={ImFacebook} />
// const twiiter = <ImTwitter icon={ImTwitter} />

const mail = <FontAwesomeIcon icon={faBeer} />
const Footer = () => {
    return (
        <footer className="contenedor">

            {/* COLUMNA 1 */}
            <div>
                <p className="parrafoFooter">Seguinos en nuestras redes sociales</p>

                <nav>
                    <ul className="nav-contenedor">
                        <li className="imagen_logos_redes">
                            <a className="color-insta" href="https://www.instagram.com/?hl=es">

                                {/* <p className="color-icono fa-instagram">{ImInstagram}</p> */}
                                
                                <ImInstagram  className="color-icono fa-instagram"></ImInstagram>  
                                
                                <span>instagram</span>

                            </a>
                        </li>
                        <li className="imagen_logos_redes">
                            <a className="color-twitter" href="https://twitter.com/?lang=es">

                                {/* <p className="color-icono fa-twitter">{twiiter}</p> */}
                                <ImTwitter className="color-icono fa-twitter" />
                                <span>twitter</span>

                            </a>
                        </li>
                        <li className="imagen_logos_redes">
                            <a className="color-face" href="https://es-la.facebook.com/">
                                
                                {/* <p className="color-icono fa-facebook-f">{facebook}</p> */}
                                <ImFacebook className="color-icono fa-facebook-f" />
                                <span>facebook</span>

                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* <!-- COLUMNA 2 --> */}
            <div>
                <p className="parrafoFooter">Para mas consultas :</p>

                <div className="imagen-logo-mail">
                    
                    <div className="footer-1">
                        <p className="color-icono">{mail}</p>
                        <p className="correo">ejemplo@gmail.com</p>
                    </div>

                </div>
            </div>

            {/* <!-- COLUMNA 3 --> */}
            <div className="columna_3">
                <img src={myImg}alt="logo" className="logo__footer" />
            </div>

        </footer>
    )
}

export default Footer

import { NavLink } from "react-router-dom"

// importamos icono del carrito de compras
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';

const elmenet = <FontAwesomeIcon icon={faCartArrowDown} />

const NavBar = () => {
    return (
        <nav className="navbar nabvar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="btn btn-outline-primary">HOME</NavLink>
                <NavLink to="/nosotros" className="btn btn-outline-primary">NOSOTROS</NavLink>
                <NavLink to="/carrito" className="btn btn-outline-primary fs-3">
                    {elmenet}
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar

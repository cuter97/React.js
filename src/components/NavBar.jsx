import { Link, NavLink } from "react-router-dom"

// importamos icono del carrito de compras
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

const elmenet = <FontAwesomeIcon icon={faCartArrowDown} />

function BrandLink({ brand, children }) {  
    return (
      <Link to={`/?category=${brand}`} className="nav-link">
        {children}
      </Link>
    );
}

const NavBar = () => {

    const [nav, setNav] = useState([]);
       
    const getItem = async () => {
        const data = await fetch('https://my-json-server.typicode.com/cuter97/React-Api/productos')
        const prod = await data.json()
        let brands = [...new Set(prod.map(aux => aux.tipo))];
        setNav(brands)
    }
    useEffect(() => {
        getItem();
    }, [])
    
    
    return (
        <>
        <div className="menu">

            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">HOME</NavLink> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {nav.map(brand => (
                                <li key={brand} className="nav-item">
                                    <BrandLink brand={brand}>{brand}</BrandLink>
                                </li>
                            ))}
                            
                        </ul>
                        <NavLink to="/carrito" className="nav-link fs-4">
                            {elmenet}
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
        </>

    )
}

export default NavBar

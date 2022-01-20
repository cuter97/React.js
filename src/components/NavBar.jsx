import { Link, NavLink } from "react-router-dom"

// importamos icono del carrito de compras
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContextCard";

// datos de firebase
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebase";

const elmenet = <FontAwesomeIcon className="iconoCart" icon={faShoppingCart} />

function BrandLink({ brand, children }) {  
    return (
      <Link to={`/?category=${brand}`} className="nav-link">
        {children}
      </Link>
    );
}

const NavBar = () => {
    const {itemCantidad} = useContext(CartContext)
    const [nav, setNav] = useState([]);
       
    // const getItem = async () => {
    //     const data = await fetch('https://my-json-server.typicode.com/cuter97/React-Api/productos')
    //     const prod = await data.json()
    //     let brands = [...new Set(prod.map(aux => aux.tipo))];
    //     setNav(brands)
    // }

    const datosFirebase = async() =>{
        const datos = await getDocs(collection(db, 'productos'))
        let filtro = datos.docs.map(aux => {
            return {...aux.data()}
        })
        let brands = [...new Set(filtro.map(aux => aux.tipo))]
        setNav(brands)
    }

    useEffect(() => {
        datosFirebase();
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
                        <NavLink to="/carrito" className="nav-link fs-4 position-relative">
                            {elmenet}
                            {itemCantidad() > 0 && <span className="position-absolute fs-6 top-0 start-75 numero translate-middle-x badge rounded-pill bg-danger">{itemCantidad()}</span>}
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
        </>

    )
}

export default NavBar

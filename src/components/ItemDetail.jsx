// import { useLocation } from "react-router-dom"
import ItemCount from "../components/ItemCount"
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "./CartContextCard";
const ItemDetail = ({information}) => {

    const {addItem} = useContext(CartContext)
    const {info, imagen, producto, precio, alc} = information
    const [finish, setFinish] = useState(false)
    const [cantidad, setCantidad] = useState(1)

    const onAdd = () => {
        setFinish(true)
    }

    // boton de volver para atras
    const back = () => {
        setFinish(false)
    }

    return (
        <>
        <div className="fondo-img">
          
                <div className="card mb-3 tam-card">
                    <div className="row g-0" >
                        <div className="col-md-4" >
                                <img className="img-fluid rounded-start" src={imagen} alt="producto"/>
                        </div>
                        <div className="col-md-8 color-fondo">
                            <div className="card-body color-fondo">
                                <h5 className="card-title card-titulo" > {producto} </h5>
                                <p className="card-text letra" > {info} </p>
                                <p className="card-text letra" >Alcc: {alc} </p>
                                <p className="card-text letra" >Precio: ${precio} </p>
                                <div className="d-flex">
                                    {
                                        !finish && 
                                        <ItemCount stocks = {information} initial = {cantidad} onAdd = {onAdd} setCantidad = {setCantidad} /> 
                                    }
                                    {
                                        finish && <>
                                            
                                                <Link 
                                                    className="btn btn-success mx-4"
                                                     onClick={() => addItem({...information, cantidad})}
                                                    type="button"
                                                    to = {"/carrito"}
                                                >
                                                    Add to cart {cantidad}
                                                </Link>
                                                <button
                                                    className="btn btn-info" 
                                                    onClick={back}
                                                    type="button"
                                                >
                                                    Volver
                                                </button>
                                            
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
        </div>
        </>
    )
}

export default ItemDetail

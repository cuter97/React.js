import { useContext } from "react"
import { CartContext } from "./CartContextCard"

const ItemCart = () => {
    const {cart, removeItem} = useContext(CartContext)
    
    return (
        <div>
            {cart.map((element) => (
                <div
                    className="row m-3 p-3 cart-item align-items-center justify-content-between"
                    key={element.id}
                >
                    <div className=" col-md-2 col-lg-2">
                        <img className="ajuste-cart" alt='carrito' src={element.imagen}></img>
                    </div>
                    <div className=" col-md-3 col-lg-3 ">
                        <h6 className="item-name">{element.producto}</h6>
                    </div>
                    <div className=" col-md-2 col-lg-2 ">
                        <h6  className="ml-5 ">${element.precio}</h6>
                    </div>
                    <div className=" col-md-3 col-lg-2 ">
                         <h6>{element.cantidad}</h6>
                    </div>
                    
                    <div className=" col-md-1 col-lg-3 ">
                        <button
                        className="btn ml-5 p-1"
                        onClick={() => removeItem(element.id)}
                        >
                        X
                        </button>
                    </div>
                </div>
            ))}
    </div>
    )
}

export default ItemCart

import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContextCard"
import ItemCart from "./ItemCart"

const ItemCartContainer = () => {
    const {cart, clear, precioTotal} = useContext(CartContext)
    return  cart.length === 0 ? (
        <div className=" d-flex flex-column align-items-center p-3">
            <h3>No hay items en el carrito</h3>
            <Link to={'/'}>Regrese a comprar</Link>
        </div>
    ) : (
        <div className="container  cart-container  p-1">
      <div className="row">
        <div className="col-12 col-lg-12">
          <ItemCart></ItemCart>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
          <button
            className="btn btn-warning"
            onClick={() => clear()}
          >
            Vaciar carrito
          </button>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
          <h5 className="text-center ">
            Precio total: ${precioTotal()}
          </h5>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
          <h6>
              <button className="btn btn-success">
                <span>Confirmar compra</span>
              </button>
          </h6>
        </div>
      </div>
    </div>
    )
    
}

export default ItemCartContainer

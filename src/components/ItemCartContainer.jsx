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
    <div className="container">
      <div className="flex-column d-flex align-items-center">
          {
            cart.map((element) => (
            
              <ItemCart key={element.id} item={element}></ItemCart>

            ))

          }
      </div>

      <div className="d-flex justify-content-evenly">
          <div className="">
            <h5 className="my-2">
              Precio total: ${precioTotal()}
            </h5>
          </div>


          <div>
            <button
              className="btn btn-warning mx-3"
              onClick={() => clear()}
            >
              Vaciar carrito
            </button> 
            
            <button className="btn btn-success">
              <span>Confirmar compra</span>
            </button>
      
          </div>


      </div>
    </div>
    )
    
}

export default ItemCartContainer

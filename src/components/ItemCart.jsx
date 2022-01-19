 import { useContext } from "react"
 import { CartContext } from "./CartContextCard"

const ItemCart = ({item}) => {
    
     const {removeItem} = useContext(CartContext)
    
    return (
   
        <div
            className="card mb-3 rounded-3 shadow border-0"
            // key={element.id}
            style={{ height: 150, width:900, overflow: `hidden`}}
        >
                <div className="row g-0" style={{height: 150}}>
                    <div className="col-md-3">
                    <img src={item.imagen} className="img-fluid rounded-start card-cart" alt="beer"></img>
                    </div>
                    <div className="col-md-9 h-100 position-relative">
                        <div className="card-body ">
                            <h5 className="card-title">{item.producto}</h5>
                            <p className="card-text">Precio: ${item.precio}</p>
                            <p className="card-text">Cantidad: {item.cantidad}</p>
                            <button
                                className="btn-close position-absolute top-0 end-0"
                                onClick={() => removeItem(item.id)}
                            >
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    
    )
}

export default ItemCart

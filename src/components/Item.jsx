import { Link } from "react-router-dom"

const Item = ({props}) => {

    // desestructuramos
    const {id, producto, precio, tipo, imagen} = props
    return (
        <div className="medio col-md-4 my-3">

            <div className="card card-home" >
                <img src={imagen} className="card-img-top ajuste" alt="cerveza" />
                <div className="card-body">
                    <h5 className="card-title text-center"> {producto} </h5>
                    <p className="card-text text-center">Precio: ${precio} </p>
                    <p className="card-text text-center">Tipo: {tipo} </p>
                    <div className="medio">
                        <Link className="btn btn-warning" to={`/item/${id}`}>
                            Mas información 
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Item
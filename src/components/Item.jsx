const Item = ({props}) => {

    // desestructuramos
    const {id, producto, precio} = props
    return (
        <div className="col-md-4 mb-2">

            <div className="card">
                <h5 className="card-header text-center"> {producto} </h5>
                <p className="card-body text-center">Precio: ${precio} </p>
                <button className="btn btn-warning" datatype={id}>COMPRAR</button>
            </div>
            
        </div>
    )
}

export default Item

// import { useLocation } from "react-router-dom"
import ItemCount from "../components/ItemCount"
const ItemDetail = ({information}) => {

    const {info, imagen, producto, precio, alc} = information
  
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
                                    <ItemCount productos = {information} />
                                    {/* <button className="btn btn-warning">COMPRAR</button> */}
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

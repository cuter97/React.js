import { Link } from "react-router-dom";

const OrdenFormulario = (props) => {
  return props.id === 1 ? (
      <div className="text-center my-5">
        <button className="btn btn-primary my-5" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
        </button>
      </div>
  ):(
    <div className="my-5 d-flex align-items-center flex-column p-5">
        <h2>Compra realizada con éxito</h2>

        <h4 className="my-4">Orden de compra: {props.id}</h4>
        
        <h5 className="my-3">si desea seguir comprando presione HOME</h5>

        <Link className='btn btn-primary my-5 px-5' to={'/'}> <h5>HOME</h5> </Link>
    </div>
  ) 
}

export default OrdenFormulario;

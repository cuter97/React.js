import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const ItemCount = ({productos}) => {

    let stock = 8, initial = 1;

    const [contador, setContador] = useState(initial);
    const [finish, setFinish] = useState(false)
    const [color, setColor] = useState({
        color1: '#dc3545',
        color2: '#0d6efd',
    })

    useEffect(() => {
        if (contador === stock) {
            setColor({color1: '#dc3545', color2:'#cbc7c7' })
        }else if (contador === 1) {
            setColor({color2: '#dc3545', color1:'#cbc7c7' })
        }else {
            setColor({
                color1: '#dc3545',
                color2: '#0d6efd',
            })
        }
    },[contador, stock])

    const aumentar = () => {
        if(contador < stock)
            setContador(contador + 1);
    }
    const disminuir = () => {
        if(contador > initial)
            setContador(contador - 1);
    }

    const onAdd = () => {
        console.log(productos.producto, contador, productos.id)
    }

    return !finish ? (
        
        <div className="color-fondo mx-4 d-flex align-items-center justify-content-center">

            <button 
                className="btn btn-danger"
                style={{ backgroundColor: `${color.color1}` }}
                onClick={disminuir}
            >
                -
            </button>

            <div className="p-2">{contador}</div>

            <button 
                className="btn btn-primary" 
                style={{ backgroundColor: `${color.color2}` }}
                onClick={aumentar}
            >
                +
            </button>
            <button 
                className="btn btn-warning mx-3" 
                onClick={() => setFinish(true)}
            >
                Terminar
            </button>

        </div>
    ) : (
        <div>
            <Link 
                className="btn btn-success mx-4"
                onClick={() => onAdd()}
                to = {"/carrito"}
            >
                Add to cart {contador}
            </Link>
            <button
                className="btn btn-info" 
                onClick={() => setFinish(false)}
            >
                Volver
            </button>
        </div>
    )
}

export default ItemCount

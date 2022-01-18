import { useEffect, useState } from "react";

const ItemCount = ({stocks, initial, onAdd, setCantidad}) => {
    const {stock} = stocks
    const [contador, setContador] = useState(initial);
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


    return (
        
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
                onClick={() => {
                    onAdd()
                    setCantidad(contador)
                }}
            >
                Terminar
            </button>

        </div>
    ) 
}

export default ItemCount

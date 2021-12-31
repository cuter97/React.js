import { useState } from "react";

const ItemCount = () => {

    let stock = 8, initial = 1;

    const [contador, setContador] = useState(initial);

    const aumentar = () => {
        if(contador < stock)
            setContador(contador + 1);
    }
    const disminuir = () => {
        if(contador > initial)
            setContador(contador - 1);
    }

    return (
        <>
                <div className="color-fondo mx-4 d-flex align-items-center justify-content-center">

                    <button className="btn btn-danger"
                        onClick={disminuir}
                    >
                        -
                    </button>

                    <div className="p-2">{contador}</div>

                    <button className="btn btn-primary" 
                            onClick={aumentar}
                    >
                        +
                    </button>
                </div>

        </>
    )
}

export default ItemCount

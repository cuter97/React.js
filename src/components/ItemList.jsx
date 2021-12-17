import { useEffect, useState } from "react"
import Item from "./Item";

const ItemList = ({productos}) => {

    const [cerveza, setCerveza] = useState([]);
    
    
    useEffect(() => {

        const promesa = new Promise( (res, rej) => {
            
            setTimeout(() => {
                
                if (productos.length > 0) {
                    res(productos)
                }
                else{
                    rej('no hay produtos')
                }
                
            }, 2*1000);
        })
        // setCerveza(productos)
        promesa
            .then(res => {setCerveza(res)})
            .catch(err => {console.log(err)})

    }, [productos])

    return (
        <>
        <div>
            Productos
        </div>

        <div className="row">
            {
                cerveza.map(item => (
                    <Item key={item.id} props={item} />
                ))
            }
        </div>

        </>
    )
}

export default ItemList
import { useEffect, useState } from "react"
import Item from "./Item";

const ItemList = () => {

    const [cerveza, setCerveza] = useState([]);
       
    const getItem = async () => {
        const data = await fetch('https://my-json-server.typicode.com/cuter97/React-Api/productos')
        const prod = await data.json()
        setCerveza(prod)
    }

    useEffect(() => {

        const promesa = new Promise( (res, rej) => {
            
            setTimeout(() => {
                
                if (setCerveza.length > 0) {
                    res(setCerveza)
                }
                else{
                    rej('no hay produtos')
                }
                
            }, 0*1000);
        })
        // setCerveza(productos)
        promesa
            .then(res => {getItem(res)})
            .catch(err => {console.log(err)})
        // getItem()

    }, [])

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
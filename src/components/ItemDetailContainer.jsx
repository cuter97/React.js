import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [informacion, setInformacion] = useState([])

    
    useEffect(() => {

        const getInfo = async () => {
            const data = await fetch(`https://my-json-server.typicode.com/cuter97/React-Api/productos/${id}`)
            const product = await data.json()
            setInformacion(product)
        }

        const nuevaPromesa = new Promise( (res, rej) => {
            
            setTimeout(() => {
                
                if (setInformacion.length > 0) {
                    res(setInformacion)
                }
                else{
                    rej('no hay produtos')
                }
                
            }, 0*1000);
        })
        // setCerveza(productos)
        nuevaPromesa
            .then(res => {getInfo(res)})
            .catch(err => {console.log(err)})
    }, [id])

    return (
        
        <div>
            <ItemDetail information = {informacion} ></ItemDetail>
        </div>
        
    )
}

export default ItemDetailContainer

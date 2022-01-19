import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

import { getDoc, doc } from "firebase/firestore"
import db from "../firebase/firebase"

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [informacion, setInformacion] = useState([])

    
    // useEffect(() => {
        
    //     const getInfo = async () => {
    //         const data = await fetch(`https://my-json-server.typicode.com/cuter97/React-Api/productos/${id}`)
    //         const product = await data.json()
    //         setInformacion(product)
    //     }
        
    //     getInfo()
    // }, [id])

    useEffect(() => {
        
        const obtenerId = async() => {
            const datos = await getDoc(doc(db, 'productos', id))
            setInformacion({...datos.data(), id: datos.id})
        }
        
        obtenerId()
    }, [id])

    return (
        
        <div>
            <ItemDetail information = {informacion} ></ItemDetail>
        </div>
        
    )
}

export default ItemDetailContainer

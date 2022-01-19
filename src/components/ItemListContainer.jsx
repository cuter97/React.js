import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom"
import Item from "./Item";

import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebase";

const ItemListContainer = () => {
    const [element, setElemet] = useState([])
    
    
    // const getItem = async () => {
    //     const data = await fetch('https://my-json-server.typicode.com/cuter97/React-Api/productos')
    //     const prod = await data.json()
    //     setElemet(prod)
    // }
    // useEffect(() => {
        // getItem()
    // }, [])

    useEffect(() => {
        const obtenerDatos = async() => {
            const datos = await getDocs(collection(db, 'productos'))
            setElemet(datos.docs.map(elemento => {
                return {...elemento.data(), id: elemento.id}
            }))
        }

        obtenerDatos()
    }, [])
    
    const [serchParams] = useSearchParams();
    const brand = serchParams.get("category")
    
    const elementos = useMemo(() => {

        const filterBrand = (brand) => {
            return element.filter(
             aux => aux.tipo === brand);
        }
        
        if (!brand){
            return element;
        }else{
            return filterBrand(brand)
        } 

    }, [brand,element])
    
    return (
        <>
        <div className="fondo-pag">

            <div className="container">

                <div className="row medio">
                    {
                        elementos.map(item => (
                            <Item key={item.id} props={item} />
                        ))
                    }
                </div>

            </div>
        </div>
        </>
    )
}

export default ItemListContainer

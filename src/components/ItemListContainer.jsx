import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom"
import Item from "./Item";

const ItemListContainer = () => {
    const [element, setElemet] = useState([])
    
    
    const getItem = async () => {
        const data = await fetch('https://my-json-server.typicode.com/cuter97/React-Api/productos')
        const prod = await data.json()
        setElemet(prod)
    }
    useEffect(() => {
        getItem()
    }, [])
    
    const [serchParams] = useSearchParams();
    const brand = serchParams.get("category")
    
    const elementos = useMemo(() => {

        const filterBrand = (brand) => {
            return element.filter(
             aux => aux.tipo.toLowerCase() === brand.toLowerCase());
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

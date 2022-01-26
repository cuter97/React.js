import React, { useEffect, useState } from "react";

export const CartContext = React.createContext(0);

const storage = JSON.parse(localStorage.getItem('carrito'))

export const CartContextCard = ({children}) => {

    const [cart, setCart] = useState(storage || [])

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    const addItem = (item) => {

        const newItem = {...item}

        // si vuelve a agregar mas productos y supera al stock pone en cantidad el stock disponible
        if (isInCart(item.id)) {
            
            let itemCart = cart.find((value) => value.id === item.id)

            const suma = itemCart.cantidad + item.cantidad

            if(suma <= item.stock){

                setCart(cart.map((aux) => {
                    return aux.id === item.id ? {...aux, cantidad: suma} : aux 
                }))

            }else if(suma > item.stock){
                
                setCart(cart.map((aux) => {
                    return aux.id === item.id ? {...aux, cantidad: item.stock} : aux 
                }))

            }

        }else {
            setCart([newItem, ...cart])
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => cart.some((item) => item.id === id)

    // funcion para poner la cantidad de productos en el icono del carrito
    const itemCantidad = () => cart.reduce((total, value) => total + value.cantidad, 0)

    const precioTotal = () => cart.reduce((total, value) => total + value.precio * value.cantidad, 0)

    return (
        <CartContext.Provider
        value={{
            cart,
            isInCart,
            clear,
            removeItem,
            addItem,
            precioTotal,
            itemCantidad,
        }}>
            {children}
        </CartContext.Provider>
    )
}



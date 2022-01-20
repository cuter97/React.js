import React, { useState } from "react";

export const CartContext = React.createContext(0);

export const CartContextCard = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item) => {

        const newItem = {...item}

        // si esta en el carrito cambio la cantidad (no la sumo)
        if (isInCart(item.id)) {
            
            const changed = cart.filter(aux => aux.id !== item.id)
            setCart([newItem, ...changed])

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



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

            // cambie la logica ya que al agregar el mismo producto cuando ya no hay mas stock hace que se me borre todo el carrito
            // la logica comentada fuciona pero no es optima (revisar)
            // let itemId = cart.find((value) => value.id === item.id)

            // if (itemId.cantidad + item.cantidad <= item.stock || item.cantidad === -1) {
            //     setCart(cart.map((aux) => {
            //         return aux.id === item.id ? {...aux, cantidad: aux.cantidad + item.cantidad} : aux;
            //     }).filter((aux) => aux.cantidad > 0))
            // }else if (itemId.cantidad + item.cantidad > item.stock) {
            //     setCart(cart.map((aux) => {
            //         return aux.id === item.id ? {...aux, cantidad: aux.item.stock} : aux;
            //     }).filter((aux) => aux.cantidad > 0))
            // }

        }else {
            // setCart([...cart, item])
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



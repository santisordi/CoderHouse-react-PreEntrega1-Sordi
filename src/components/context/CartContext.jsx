import { createContext, useState } from "react";

export const CartContext = createContext();
 
const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
         
    };

    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart([...items]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }
}
import { useContext } from "react";
import { CartContext, CartContextProvider } from "./context/CartContext";

const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext)

    return (
        <div>
            <h1>Cart</h1>  
            <p>Total Producto: { cartTotal() }</p>
        </div>
    )
}

export default Cart;
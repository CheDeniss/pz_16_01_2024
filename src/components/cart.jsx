import React, {useContext} from 'react';
import {CartContext} from "./cartContext.jsx";
import CartItem from "./cartItem.jsx";

const Cart = () => {
    const {cart, addProd, delProd, clearCart, getCartInfo } = useContext(CartContext);
    return (
        <div>
            <h2>Кошик</h2>
            <ul>
                {
                    cart.map((item, index) => (
                        <li key={item.productId}>
                            <CartItem product={item} index={index}/>
                        </li>
                    ))
                }
            </ul>
            <button style={{width: "150px", background:"lightcoral"}} className="Button" onClick={() => {clearCart()}}>Очистити кошик</button>
        </div>
    );
};

export default Cart;

import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './cartContext.jsx';
import cartIcon from '../assets/free-icon-shopping-cart-526737.png';

const ShowCartDataIcon = () => {
    const { cart, getCartInfo } = useContext(CartContext);
    const [cartData, setCartData] = useState({ totalQuant: 0, totalPrice: 0 });

    useEffect(() => {
        const updateCartInfo = async () => {
            const info = await getCartInfo();
            setCartData(info);
        };

        updateCartInfo();
    }, [cart, getCartInfo]);

    return (
        <div className="show-info-container">
            <img src={cartIcon} alt='icon' />
            <span style={{margin: "10px"}}>Кількість: {cartData.totalItems}</span>
            <span>Сума: ${cartData.totalPrice.toFixed(2)}</span>
        </div>
    );
};

export default ShowCartDataIcon;

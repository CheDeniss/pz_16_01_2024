import React, {createContext, useState, useContext, useEffect} from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addProd = (prod) => {
        let isExist = cart.find(item => item.productId === prod.productId);

        if (isExist) {
            const newCart = cart.map(item => {
                if (item.productId === prod.productId) {
                    return { ...item, quantity: item.quantity + prod.quantity }
                }
                return item
            })
            setCart(newCart)
        } else {
            const newCart = [...cart, { productId: prod.productId, quantity: prod.quantity }]
            setCart(newCart)
        }
    };

    useEffect(() => {
        console.log("carrrrt")
        console.log(cart)
    })

    const delProd = (delId) => {
        const newCart = cart.filter(item => item.productId !== delId);
        setCart(newCart);
    };

    const updateProd = (prod) => {
        console.log(`updateProd ${prod.quantity}`)
        const newCart = cart.map(item => {
            if (item.productId === prod.productId) {
                return { ...item, quantity: prod.quantity }
            }
            return item
        })
        setCart(newCart)
    }

    const clearCart = () => setCart([]);

    const getCartInfo = async () => {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        let totalPrice = 0;

        for (const item of cart) {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
                const data = await response.json();
                totalPrice += data.price * item.quantity;
            } catch (e) {
                console.error(e);
            }
        }

        return { totalItems, totalPrice };
    };

    return (
        <CartContext.Provider value={{ cart, addProd, delProd, clearCart, getCartInfo, updateProd }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;

import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from './cartContext.jsx';
import './cartItem.css'
import '../index.css'

const CartItem = ({ product, index }) => {
    const {cart, delProd, updateProd} = useContext(CartContext)

    if (!cart || index < 0 || index >= cart.length || !cart[index]) {
        return <p>Невідома помилка(.</p>;
    }

    const [prodData, setProdData] = useState({});
    const [count, setCount] = useState(product.quantity)

    const getProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${product.productId}`);
            const data = await response.json();
            setProdData(data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    useEffect(() => {
        updateProd({ productId: prodData.id, quantity: parseInt(count) });
    }, [count]);

    const changeVal = (e) => {
        console.log("changeVal")
        console.log(count)
        const newCount = parseInt(e.target.value);
        setCount(newCount)
    }

    return (
        <>
            <hr/>
        <div className="container-top">
            <div style={{display: "flex"}}>
                <img className="img-item" src={prodData.image} alt={prodData.title}/>
                <h3>{prodData.title}</h3>
            </div>
            <div className="Button" onClick={() => delProd(prodData.id)}>Видалити</div>
        </div>
        <div className="container-bottom">
            <label><input min={1} type={"number"} value={count} onChange={changeVal}/></label>
            <h4 style={{margin: "0 20px"}}>${count*prodData.price}</h4>
        </div>
        </>
    );
};

export default CartItem;

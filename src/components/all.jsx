import React, {useContext, useEffect, useState} from 'react';
import {json, Link} from "react-router-dom";
import '../index.css'
import {CartContext} from "./cartContext.jsx";

const All = () => {
    const [allProd, setAllProd] = useState([]);
    const { addProd } = useContext(CartContext);

    const getAllProds = async () => {
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setAllProd(data)
        }
        catch (e)
        {
            console.error(e)
        }
    }

    useEffect(() => {
        return () => {
            getAllProds()
        };
    }, []);

    return (
        <>
            <h2>Список товарів</h2>
            <div className="all-container">
                {allProd.map(prod => (
                    <div className="all-container-item" key={prod.id}>
                        <img height={100} src={prod.image} alt={prod.title} />
                        <p>{prod.title}</p>
                        <p>Ціна: ${prod.price}</p>
                        <div className="button-container">
                            <div className="Button" onClick={() => addProd({ productId: prod.id, quantity: 1 })}>Купити</div>
                            <Link to={`/details/${prod.id}`}>
                                <div className="Button">Деталі</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default All;

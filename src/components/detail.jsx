import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {CartContext} from "./cartContext.jsx";

const Detail = () => {
    const {id} = useParams()
    const [prodData, setProdData] = useState({});
    const { addProd } = useContext(CartContext);
    const [count, setCount] = useState(1);

    const getDetail = async () => {
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            setProdData(data)
        }
        catch (e)
        {
            console.error(e)
        }
    }

    useEffect(() => {
        return () => {
            getDetail()
        };
    }, []);

    return (
        <div>
            <span className="secondary-information">Категорія: {prodData.category}</span>
            <hr/>

            <div className="detaildata-container">
                <div className="detaildata-container-box">
                    <img height={500} src={prodData.image} alt={prodData.title}/>
                </div>

                <div className="detaildata-container-box">
                    <div className="detaail-spacebetween">
                        <h1>{prodData.title}</h1>
                        <p className="secondary-information">Код товару: {id}</p>
                    </div>
                    <p>{prodData.description}</p>
                    <div >
                        <h2>Ціна: ${prodData.price}</h2>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <div className="Button" onClick={() => {addProd({productId: prodData.id, quantity: count})}}>Купити</div>
                            <label><input type={"number"} min={1} max={100} onChange={(e) => setCount(parseInt(e.target.value))} /></label>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Detail;

import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../index.css'
import ShowCartDataIcon from "./showCartIcon.jsx";

const Menu = () => {
    const [inputVal, setInputVal] = useState(100)

    const inputValChange = (e) => {
        setInputVal(e.target.value)
    }

    return (
        <nav className='nav-container'>
            <ul className="menu-ul">
                <li><Link className="menu-li" to="/all">Усі товари</Link></li>
                <li><Link className="menu-li" to = "/cart">Кошик</Link></li>
            </ul>
            <ShowCartDataIcon/>
        </nav>
    );
};

export default Menu;

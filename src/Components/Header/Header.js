import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import {Link} from "react-router-dom";

const Header=(props) => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
            </nav>
        </div>
    );
}

export default Header;
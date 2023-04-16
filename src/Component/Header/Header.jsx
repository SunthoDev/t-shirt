import React from 'react';
import "./Header.css" 
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <nav className='NavBar'>

            <ul className='flex'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/order">Order</Link>
                <Link to="/review">Review</Link>
                <Link to="/contact">Contact</Link>
            </ul>

            
        </nav>
    );
};

export default Header;
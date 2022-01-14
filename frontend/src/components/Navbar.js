import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar_logo'>
            <h2>Shopping Cart</h2>
            </div>

            <ul className='navbar_links'>
                <li>
                    <Link to="/cart">
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                        <span className='cartlogo_badge'>0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                        <span className='cartlogo_badge'>0</span>
                    </Link>
                </li>
            

            </ul>
            <div className='hamburger_menu'>
                <div>
                </div>
                <div></div>
                <div></div>
            </div>
            
        </nav>
    )
}

export default Navbar

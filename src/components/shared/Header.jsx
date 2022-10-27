import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header_title'>
            <NavLink to='/'> 
                e-commerce
            </NavLink>
        </h1>
        <nav className='header_nav'>
            <ul>
                <li className='header_item'>
                    <NavLink className='header_link' to='/login'>
                        Login
                    </NavLink>
                </li>
                <li className='header_item'>
                    <NavLink className='header_link' to='/purchases'>
                        Purchases
                    </NavLink>
                </li>
                <li className='header_item'>
                    <NavLink className='header_link' to='/cart'>
                        Cart
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
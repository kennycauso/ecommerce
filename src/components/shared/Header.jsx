import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { FiArchive } from 'react-icons/fi'
import { BsCart2 } from 'react-icons/bs'

const Header = () => {

    return (
        <header className='header'>
            <NavLink to='/'>
                <h1 className='header__logo'>e-commerce</h1>
            </NavLink>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/login' >
                            <FiUser className='header__icon' />
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/purchases' >
                            <FiArchive className='header__icon' />
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/cart' >
                            <BsCart2 className='header__icon' />
                        </NavLink>
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

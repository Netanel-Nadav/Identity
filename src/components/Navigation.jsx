import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


import routes from '../routes'

export function Navigation() {


    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className='main-container'>
            <div className={`${isMenuOpen ? 'open' : ''} main-screen`} onClick={toggleMenu}></div>

            <div className="wrraper flex space-between align-center">
                <div className="burger flex column" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='logo-container'>
                    <span>Logo Here</span>
                </div>
                <ul className={`${isMenuOpen ? 'open' : ''} clean-list flex align-center justify-center`}>
                    {routes.map(route => <li key={route.path} onClick={toggleMenu}><NavLink to={route.path}>{route.label}</NavLink></li>)}
                </ul>
            </div>
        </nav>
    );
}

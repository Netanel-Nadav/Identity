import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


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
                <Link to={'/'}>
                    <div className='logo-container'>
                        <span>Logo Here</span>
                    </div>
                </Link>
                <ul className={`${isMenuOpen ? 'open' : ''} clean-list flex align-center justify-center`}>
                    <li onClick={toggleMenu}><NavLink to={'/'}>Home</NavLink></li>
                    <li onClick={toggleMenu}><NavLink to={'/About'}>About me</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

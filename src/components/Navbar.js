import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import Logo from '../images/F1 Logo.png'

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 960)

    // Handle mobile menu toggle
    const handleClick = () => setClick(!click)
    
    // Close mobile menu when a link is clicked
    const closeMobileMenu = () => setClick(false)

    // Handle responsive design
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 960)
            // Close dropdown and mobile menu on larger screens
            if (window.innerWidth > 960) {
                setClick(false)
                setDropdown(false)
            }
        }

        // Add resize event listener
        window.addEventListener('resize', handleResize)
        
        // Cleanup event listener
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Handle dropdown for mobile and desktop
    const toggleDropdown = () => {
        if (isMobile) {
            setDropdown(!dropdown)
        }
    }

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-header'>
                    <img src={Logo} alt='F1-Logo' className='navbar-logo' />
                </Link>

                {/* Mobile menu icon */}
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                {/* Navigation menu */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/drivers' className='nav-links' onClick={closeMobileMenu}>
                            Drivers
                        </Link>
                    </li>

                    

                    <li className='nav-item'>
                        <Link to='/schedule' className='nav-links' onClick={closeMobileMenu}>
                            Schedule / Results
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/quiz' className='nav-links' onClick={closeMobileMenu}>
                            Quiz
                        </Link>
                    </li>

                    <li 
                        className='nav-item dropdown'
                        onMouseEnter={() => !isMobile && setDropdown(true)}
                        onMouseLeave={() => !isMobile && setDropdown(false)}
                        onClick={toggleDropdown}
                    >
                        <Link to='/rankings' className='nav-links'>
                            Rankings
                        </Link>

                        {(dropdown && !isMobile) && (
                            <div className={`dropdown-menu ${isMobile ? 'mobile-dropdown' : ''}`}>
                                <Link 
                                    to='/rankings' 
                                    className='nav-links hover-links' 
                                    onClick={closeMobileMenu}
                                >
                                    Drivers
                                </Link>
                                
                                <Link 
                                    to='/rankings/teams' 
                                    className='nav-links hover-links' 
                                    onClick={closeMobileMenu}
                                >
                                    Teams
                                </Link>
                            </div>
                        )}

                        {(dropdown && isMobile) && (
                            <div className={`dropdown-menu ${isMobile ? 'mobile-dropdown' : ''}`}>
                                <Link 
                                    to='/rankings' 
                                    className='nav-links hover-links' 
                                    onClick={closeMobileMenu}
                                >
                                    Drivers
                                </Link>
                                
                                <Link 
                                    to='/rankings/teams' 
                                    className='nav-links hover-links' 
                                    onClick={closeMobileMenu}
                                >
                                    Teams
                                </Link>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
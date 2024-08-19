import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Navbar.css'
import Logo from '../images/F1 Logo.png'

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
   

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

 
    
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to ='/' className='navbar-header'>
                <img src={Logo} alt='F1-Logo' />
            </Link>
            <div className='menu-icon' onClick = {handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
       

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

            {/* <li className='nav-item'>
                <Link to='/constructors' className='nav-links' onClick={closeMobileMenu}>
                    Constructors
                </Link>
            </li> */}

            <li className='nav-item'>
                <Link to='/schedule' className='nav-links' onClick={closeMobileMenu}>
                    Schedule / Results
                </Link>
            </li>

            {/* <li className='nav-item'>
                <Link to='/race-results' className='nav-links' onClick={closeMobileMenu}>
                    Race Results
                </Link>
            </li> */}

            
           
            <li className='nav-item'
             onMouseLeave={() => setDropdown(false)}
             onMouseEnter={() => setDropdown(true)}>

               
                <Link to='/rankings' className='nav-links' onClick={closeMobileMenu}>
                    Rankings
                </Link>

                {dropdown && <div className='dropdown-menu'>
                <Link to='/rankings' className='nav-links hover-links'>
                    Drivers
                </Link> 
                
                 <Link to='/rankings/teams' className='nav-links hover-links'>
                    Teams
                </Link> 

                </div> }

               </li>
            

            <li className='nav-item'>
                <Link to='/quiz' className='nav-links' onClick={closeMobileMenu}>
                    Quiz
                </Link>
            </li>

        </ul>
        </div>
        


    </nav>
    </>
  )
}

export default Navbar

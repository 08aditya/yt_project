import React, {useState} from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  const [click ,setClick] = useState(false);
  const handelClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <>
      <nav className='navbar'>
        <div className='navbar-container'>
             <Link to = '/' className='navbar-logo'>
                TRVL <i className='fab fa-typo3' />
             </Link>
             <div className='menu-icon' onClick={handelClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to = '/' className='nav-link' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
             </ul>
        </div>
      </nav>
      </>
    </div>
  )
}

export default Navbar

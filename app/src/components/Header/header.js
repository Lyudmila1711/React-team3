import React from 'react'
import NavBar from './Navbar'
import '../../styles/header.css'
import Logo from '../../img/logo.jpg'



function Header(){
  return (
  
        <div className='header'>
            <div>
                <img className='img-logo' src={Logo} alt='Logo image' />
            </div>
            <div className='navbar-header'> 
                <NavBar/>
            </div>
        </div>

  )
}
export default Header;


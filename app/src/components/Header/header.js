import React from 'react'
import NavBar from './Navbar'
import '../../styles/header.css'
import Logo from '../../img/logo.jpg'
import Search from './searchField'
import {Routes, Route} from 'react-router-dom'



function Header(){
  return (
  
        <div className='header'>
            <div>
                <img className='img-logo' src={Logo} alt='Logo image' />
            </div>
            <div className='navbar-header'> 
                <NavBar/>
            </div>
            <Routes>
                <Route path='/catalog' element={<Search />}/>
            </Routes>
            
        </div>

  )
}
export default Header;


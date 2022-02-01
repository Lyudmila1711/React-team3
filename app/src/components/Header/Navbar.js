import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/NavBar.css'


function NavBar(){
  return(
    
      <div className='navbar' >
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/catalog'>Catalog</Link>
        <Link className='link' to='/cart'>Cart</Link>
      </div>
    
  )
}

export default NavBar
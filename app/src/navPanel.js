import React from 'react'
import './header.css'
import Img from './img/logo.jfif'

const Navigation = () => (
    <nav>
        <img src={Img} alt='aaa'></img>
        <div className='nav'>
            <ul>
                <li>Home</li>
                <li>Catalog</li>
                <li>Cart</li>
            </ul> 
        </div>
    </nav>
)

export default Navigation;
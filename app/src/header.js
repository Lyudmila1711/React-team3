import React from 'react'
import './header.css'
import Img from './img/Main.jfif'


const HeaderBlock = () => (
    <div class='header'>
        <div>
            <img src={Img} alt="aaa" ></img>
            </div>
        <div>
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
        </div>
    </div>
)

export default  HeaderBlock;


import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import Logo from '../../img/logo.jpg'
import '../../styles/footer.css'

function Footer () {
    return (
        <div className='footer-content'>
            <div className='branding-stuff'>
            <strong>Branding stuff</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            </div>

            <div className='logo-foot'>
            <img className='logo-foot-img' src={Logo} alt='Logo image' />
            </div>
            
            <div className='icon-awe'>
                <p> <FaFacebook /></p>
                <p> <FaTwitter /></p>
                <p> <FaXbox /></p>
                <p> <BsTelegram /></p>
            </div>
            
            <div className='rights'>
                all rigts are reserved
            </div>
        </div>
        
        
        )
    }
    

export default Footer;
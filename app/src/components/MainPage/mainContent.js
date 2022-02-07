import React from 'react'
import '../../styles/mainContent.css'
import legoDuplo from '../../img/lego-duplo.jpeg'
import legoIkea from '../../img/lego-ikea.jpeg'
import legoLgbt from '../../img/lego-lgbt.jpeg'
import headingImg from '../../img/heading img.jfif'
import ButtonMain from './ButtonMain'


function MainContent (){
    return (
    <main>
        <div className='heading'>
            <div>
                <img src={headingImg} alt="baby in play zone" ></img>
            </div>
            <div>
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
            </div>
        </div>
        <div className='main'>
        <div>
            <img src={legoDuplo} alt = 'lego duplo'></img>
            <h2>Title 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>      
        </div>
        <div>
            <img src={legoIkea} alt = 'lego ikea'></img>
            <h2>Title 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>      
        </div>
        <div>
            <img src={legoLgbt} alt = 'new lego lgbt'></img>
            <h2>Title 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>      
        </div>
        </div>
        <ButtonMain />
    </main>

    )
} 

export default MainContent;
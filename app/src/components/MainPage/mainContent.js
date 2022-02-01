import React from 'react'
import '../../styles/mainContent.css'
import legoDuplo from '../../img/lego-duplo.jpeg'
import legoIkea from '../../img/lego-ikea.jpeg'
import legoLgbt from '../../img/lego-lgbt.jpeg'


function MainContent (){
    return (
    <main>
        <div className='main'>
        <div>
            <img src={legoDuplo} alt = 'image of lego duplo'></img>
            <h2>Title 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>      
        </div>
        <div>
            <img src={legoIkea} alt = 'image of lego ikea'></img>
            <h2>Title 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>      
        </div>
        <div>
            <img src={legoLgbt} alt = 'image of new lego lgbt'></img>
            <h2>Title 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>      
        </div>
        </div>
        <button className='button-view-more'>View more</button>

    </main>

    )
} 

export default MainContent;
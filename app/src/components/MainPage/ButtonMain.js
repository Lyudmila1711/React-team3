import React, { useState } from "react";
import legoDuplo from '../../img/friends.png'
import legoIkea from '../../img/starWars.jfif'
import legoLgbt from '../../img/lego.png'


function ButtonMain (){
    const [viewMore, setViewMore] = useState(false);
    const moreContent = 
        <div className='main'>
            <div>
                <img src={legoDuplo} alt = 'lego duplo'></img>
                <h2>Title 4</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>      
            </div>
            <div>
                <img src={legoIkea} alt = 'lego ikea'></img>
                <h2>Title 5</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>      
            </div>
            <div>
                <img src={legoLgbt} alt = 'new lego lgbt'></img>
                <h2>Title 6</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>      
            </div>
        </div>
    const buttonName=viewMore?'View Less':'View More'
        return (
            <div>
                {viewMore && moreContent}
                <button onClick={()=>{setViewMore(!viewMore)}}>{buttonName}</button>
            </div>
        );
}

export default ButtonMain
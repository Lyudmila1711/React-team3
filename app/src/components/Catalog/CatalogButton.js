import React from 'react'
import { Link } from 'react-router-dom';

function CatalogButton({item}){
    return(
        <div>
            <Link to={`/catalog/${item.id}`}>
            <button className='catalog-btn' type='button'>Дізнатись більше</button>
            </Link>
        </div>
    )
}

export default CatalogButton;

import React from 'react';
import '../../styles/CardsCatalog.css';
import CatalogButton from './CatalogButton';


export default function CardsCatalog({item}) {
    return (
        <div>
            <img src={item.image} width='200px' height='250px' />
            <div>
                <p className=''>Опис товару... {item.description}</p>
            </div>
            <h3>{item.name}</h3>
            <div>
                <p><strong>Ціна: {item.price}{'грн'}</strong></p>
            </div>
            <div className='btn-catalog-items'>
                <CatalogButton/>
            </div>
        </div>
    )
}

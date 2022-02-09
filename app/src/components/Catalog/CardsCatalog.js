import React from 'react';
import '../../styles/CardsCatalog.css';
import CatalogButton from './CatalogButton';
import CatalogItem from "./CatalogItem";


export default function CardsCatalog({item}) {
    return (
        <div className='cards-content'>
            <img className='img-content' src={item.image} width='150px' height='200px' />
            <h3>{item.name}</h3>
            <div className='descript-items'>
                <p>Опис товару... {item.description}</p>
            </div>
            <div className='price-container'>
                <p className='price'><strong>Ціна: {item.price}{' грн'}</strong></p>
            </div>
            <div className='btn-catalog-items'>
                <CatalogButton item = {item}/>
            </div>
        </div>
    )
}

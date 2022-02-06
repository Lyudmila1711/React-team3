import React from 'react';
import CardsCatalog from './CardsCatalog';
import {data} from '../../data';

export default function Catalog(){
    return (
        <div className='cards-container'>
            <div className='cards'>
                {
                    data.map(value => <CardsCatalog key={value.id} item={value}/>)
                }
            </div>
        </div>
    )
}
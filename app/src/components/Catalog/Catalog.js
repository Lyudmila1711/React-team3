import React from 'react';
import CardsCatalog from './CardsCatalog';
import '../../styles/Catalog.css'
import {data} from '../../data';
import Filterbox from './FilterCatalog'

export default function Catalog(){
    return (

        <div>
            <Filterbox />
            <div className='cards-container'>
                <div className='cards'>
                    {
                        data.map(value => <CardsCatalog key={value.id} item={value}/>)
                    }
                </div>
            </div>
        </div>
    )
}
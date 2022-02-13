import React,{useState} from 'react';
import CardsCatalog from './CardsCatalog';
import '../../styles/Catalog.css'
import {data} from '../../data';
import Filterbox from './FilterCatalog'
import '../../styles/SearchField.css'

export default function Catalog(){
    const [value, setValue] = useState(' ')
    const filteredCountries = data.filter(name => {
        return name.name.toLowerCase().includes(value.toLowerCase())
    })
    return (
             <div>
                <div className="search">
                <input 
                    type="text" 
                    placeholder="Search name" 
                    onChange={(event) => setValue(event.target.value)}
                    />
            </div>
      
            <Filterbox />
            <div className='cards-container'>
                <div className='cards'>
                    {
                        filteredCountries.map(value => <CardsCatalog key={value.id} item={value}/>)
                    }
                </div>
            </div>
        </div>
    )
}
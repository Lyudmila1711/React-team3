import React,{useState} from 'react';
import CardsCatalog from './CardsCatalog';
import '../../styles/Catalog.css'
import {toys} from '../../data';
import Filterbox from './FilterCatalog'
import '../../styles/SearchField.css'

export default function Catalog(){
    const [data, setData] = useState(toys)

    const [value, setValue] = useState(' ')
    const filterChild  = toys.filter(name => {
        return name.name.toLowerCase().includes(value.toLowerCase())
    })

    const filteredItems = (value) =>{
        const result = value === undefined ? toys : (toys.filter((items) => {
            return items.age === value
        }))
        setData(result)
    }

   
    return (
             <div>
                <div className="search">
                <input 
                    type="text" 
                    placeholder="Search name" 
                    onChange={(event) => setValue(event.target.value)}
                    />
            </div>
      
            <Filterbox filteredItems={filteredItems}/>
            <div className='cards-container'>
                <div className='cards'>
                    {
                        filterChild.map(value => <CardsCatalog key={value.id} item={value}/>)
                    }
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import FilterBtn from './FilterBtn'
import "../../styles/FilterCatalog.css"

function Filterbox({filteredItems}){
    return(
      <div>
        <div className='filter-box'>
          <div className='filter-left'>
          <button className='filter-button1' onClick={()=>filteredItems('children')}>For children</button>
          <button className='filter-button1' onClick={()=>filteredItems('teenager')} >For teenagers</button>
          <button className='filter-button1' onClick={()=>filteredItems('adults')}>For adults</button>
          <button className='filter-button1' onClick={()=>filteredItems( )}>All toys</button>
          </div>
          <div className='filter-right'>
            <FilterBtn/>
          </div>
        
        </div>
      </div>   
    )
  }

    export default Filterbox
import React from 'react'
import FilterBtn from './FilterBtn'
import "../../styles/FilterCatalog.css"

function Filterbox(){
    return(
      <div>
      <div className='filter-box'>
        <div className='filter-left'>
            <select className='filter-select'>
                <option value="filter1" selected disabled hidden>Filter 1</option>
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="opel">3</option>
                <option value="audi">4</option>
            </select>
            <select className='filter-select' name="filter2" >
                <option value="" selected disabled hidden>Filter 2</option>
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="opel">3</option>
                <option value="audi">4</option>
            </select>
            <select className='filter-select' name="filter3" id="cars">
                <option value="" selected disabled hidden>Filter 3</option>
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="opel">3</option>
                <option value="audi">4</option>
            </select>
        </div>
        <div className='filter-right'>
          <FilterBtn />
        </div>
      </div>
    </div>
    )
  }

    export default Filterbox
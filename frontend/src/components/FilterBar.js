import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import JSONDATA from './MOCK_DATA.json';


function FilterBar() {
  const [data, setData] = useState(JSONDATA)
  var [filterNameInit,setFilterNameInit] = useState('No filter here...')

  function FilterFunction(){
    filterNameInit = setFilterNameInit('Sort by increasing price')
    setData(data.slice().sort((a,b) => a.price - b.price))
  }


  return (
    <div class="dropdown" style={{position:'absolute', right:'0px'}}>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
  style={{backgroundColor: '#F0A12A',width:'200px'}}>
    {filterNameInit}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={FilterFunction}>Sort by increasing price</button></li>
    <li><button type="button" class="btn btn-outline-primary dropdown-item">Sort by decreasing price</button></li>
    <li><button type="button" class="btn btn-outline-primary dropdown-item">No filter here...</button></li>
  </ul>
</div>
  );
}

export default FilterBar;

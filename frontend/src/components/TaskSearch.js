import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import MenuInGen from './MenuInGen.js'
import RenderElement from './RenderElement.js'
// import FilterBar from './FilterBar.js'
import JSONDATA from './MOCK_DATA.json'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import FoodTypeList from './FoodTypeList.js'
import FoodInMenu from './FoodInMenu.js'



function TaskSearch() { 

  const [searchTerm,setSearchTerm] = useState('')
  const [data, setData] = useState(JSONDATA)
  var [filterNameInit,setFilterNameInit] = useState('No filter here...')

  function MenuInGen() {
    return (
        <div >
        <div style={{width:'100%'}}>
            <FoodTypeList />
        </div>
        <div style={{backgroundColor:'#F0F8FF',height:'750px',width:'100%'}}>
            {
              data.map((val) => {
              return <FoodInMenu name={val.food_name} price={val.price} image={val.img} />
            })
            }
        </div>
        </div>
    );
  }

  function FilterBar() {
  
    function FilterFunction(){
      setFilterNameInit("Sort by increasing price")
      setData(data.slice().sort((a,b) => a.price - b.price))
      
    }
    
    function FilterFunctionDesc(){
      setFilterNameInit('Sort by decreasing price')
      setData(data.slice().sort((a,b) => -a.price + b.price))
    }
  
    function NoFilterFunction(){
      setFilterNameInit('No filter here...')
      setData(JSONDATA)
    }

    return (
      <div class="dropdown" style={{position:'absolute', right:'0px',top:'50px'}}>
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
    style={{backgroundColor: '#F0A12A',width:'200px',height:'52px'}}>
      {filterNameInit}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={FilterFunction}>Sort by increasing price</button></li>
      <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={FilterFunctionDesc}>Sort by decreasing price</button></li>
      <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={NoFilterFunction}>No filter here...</button></li>
    </ul>
  </div>
    );
  }

  function HandleSearch() {
    var filtered;
    if (searchTerm == "") {
      filtered = <MenuInGen />
    }
    else {
    filtered = JSONDATA.filter((val)=>{
      if (val.food_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
      }
      }).map((val,key) => {
      return <div key ={key} style={{display:'inline-block'}}>
      <RenderElement val={val}/>
      </div>  
      })
    }
    ReactDOM.render(filtered,document.getElementById('MenuFirst'))
  }

return (
  <div>
  <div>
  <FilterBar />
   <input type="text" placeholder="Search Food..." onChange={event => {setSearchTerm(event.target.value)}} style={{marginRight:'5px'}}></input>
   <button class="btn btn-primary" type="submit" onClick={HandleSearch}>Search</button>
   </div>
   <div id="MenuFirst">
    <MenuInGen />
  </div> 
  </div>
);
}



export default TaskSearch;
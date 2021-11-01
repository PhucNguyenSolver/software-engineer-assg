import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import MenuInGen from './MenuInGen.js'
import RenderElement from './RenderElement.js'
import FilterBar from './FilterBar.js'
import JSONDATA from './MOCK_DATA.json'
import { useState } from 'react';
import ReactDOM from 'react-dom';


function Filter(props) {
  if (props.searchTerm === "") {
    return <MenuInGen />
  }
  return JSONDATA.filter((val)=>{
    if (val.food_name.toLowerCase().includes(props.searchTerm.toLowerCase())){
        return val
    }
    }).map((val,key) => {
    return <div key ={key} style={{display:'inline-block'}}>
    <RenderElement val={val}/>
    </div>  
    })
  }




function TaskSearch() {

  const [searchTerm,setSearchTerm] = useState('')

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
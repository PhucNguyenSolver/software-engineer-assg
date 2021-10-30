import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import MenuInGen from './MenuInGen.js'
import RenderElement from './RenderElement.js'
import JSONDATA from './MOCK_DATA.json'
import { useState } from 'react';
import MenuTest from './MenuTest.js';


function Filter(props) {
  if (props.searchTerm == "") {
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
return (
  <div>
  <div>
   <input type="text" placeholder="Search Food..." onChange={event => {setSearchTerm(event.target.value)}}></input>
   </div>
   <div>
    <Filter searchTerm={searchTerm}/>
  </div> 
  </div>
);
}



export default TaskSearch;
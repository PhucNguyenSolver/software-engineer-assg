import React from "react";
import RenderElement from './RenderElement.js'
// import FilterBar from './FilterBar.js'
import JSONDATA from './MOCK_DATA.json'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import FoodTypeList from './FoodTypeList.js'
import FoodInMenu from './FoodInMenu.js'
import Appbar from './Appbar.js'

const axios = require('axios')
axios.get('localhost:8080/food')
.then( (res) => {
  console.log(res.data)
})

function TaskSearch() { 

  const tmp = JSONDATA.slice()
  const [temp, setTemp] = useState(tmp)
  const [filterNameInit,setFilterNameInit] = useState('No filter here...')
  const [data, setData] = useState(tmp)
  const [pageNumber,setPageNumber] = useState(1)

  function MenuInGen({arr}) {
    return (
        <div >
        <div>
          <FilterBar />
        </div>
        <div style={{width:'100%'}}>
            <FoodTypeList />
        </div>
        <div style={{backgroundColor:'#efefef',height:'800px',width:'100%'}}>
            {
               arr.slice(0,10).map((val) => {
               return <FoodInMenu name={val.food_name} price={val.price} image={val.img} />
             })
             }
        </div>
        </div>
    );
  }

  function FilterFunction(){
    setPageNumber(1)
    setFilterNameInit('Sort by increasing price')
    setTemp(temp.sort((a,b) => a.price - b.price))
    setData(temp) 
  }

  function FilterFunctionDesc(){
    setPageNumber(1)
    setFilterNameInit('Sort by decreasing price')
    setTemp(temp.sort((a,b) => -a.price + b.price)) 
    setData(temp)
  }

  function NoFilterFunction(){
    setPageNumber(1)
    setFilterNameInit('No filter here...')
    setData(JSONDATA.slice())
    setTemp(JSONDATA.slice())
  }

  function FilterBar() {
    return (
      <div class="dropdown" style={{position:'absolute', right:'62px',top:'90px'}}>
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
    style={{backgroundColor: '#F0A12A',width:'200px',height:'52px'}}>
      {filterNameInit}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
      <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={FilterFunction}>Sort by increasing price</button></li>
      <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={FilterFunctionDesc}>Sort by decreasing price</button></li>
      <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={NoFilterFunction}>No filter here...</button></li>
    </ul>
  </div>
    );
  }

function Page(index) {
  setData(temp)
  setPageNumber(index)
  var menu = temp.slice((index-1)*10,10 + (index-1)*10)
  setData(menu)
}

function ChangePage(index){
  if(index > Math.ceil(JSONDATA.length / 10) || index < 1) return;
  setData(temp)
  setPageNumber(index)
  var menu = temp.slice((index-1)*10,10 + (index-1)*10)
  setData(menu)
}
return (
  <div>
   <div id="MenuFirst" style={{height:'950px',backgroundColor:'#efefef'}}>
    <MenuInGen arr={data}/>
  </div> 

  <div id="PaginationSearch" style={{height:'90px',backgroundColor:'#efefef'}}>
  <nav  aria-label="Page navigation example">
  <ul class="pagination justify-content-center pagination-lg">
    <li class="page-item">
    <button class="page-link" aria-label="Previous" onClick={() => ChangePage(pageNumber-1)}>
        <span aria-hidden="true">&laquo;</span>
      </button>
    </li>
    {
    Array.from({length: Math.ceil(JSONDATA.length / 10)}, (_, i) => i + 1).map((index) => 
    {return <li class="page-item"><button class="page-link" onClick={() => Page(index)}>{index}</button></li>})
    }
    {/* <li class="page-item"><button class="page-link" onClick={Page2}>2</button></li>
    <li class="page-item"><button class="page-link" onClick={Page3}>3</button></li> */}
    <li class="page-item">
      <button class="page-link" aria-label="Next" onClick={() => ChangePage(pageNumber+1)}>
        <span aria-hidden="true">&raquo;</span>
      </button>
    </li>
  </ul>
</nav>
  </div>
  </div>
);
}



export default TaskSearch;
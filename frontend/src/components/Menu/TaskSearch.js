import React from "react";
//import MenuInGen from './MenuInGen.js'
import RenderElement from './RenderElement.js'
// import FilterBar from './FilterBar.js'
import JSONDATA from './MOCK_DATA.json'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import FoodTypeList from './FoodTypeList.js'
import FoodInMenu from './FoodInMenu.js'
import Appbar from './Appbar.js'


// function MenuInGen({arr}) {
//   return (
//       <div >
//       <div style={{width:'100%'}}>
//           <FoodTypeList />
//       </div>
//       <div style={{backgroundColor:'#efefef',height:'750px',width:'100%',marginLeft:'px'}}>
//           {
//             arr.map((val) => {
//             return <FoodInMenu name={val.food_name} price={val.price} image={val.img} />
//           })
//           }
//       </div>
//       </div>
//   );
// }

function MenuInGen({arr}) {
  function FilterBar() {
    const [data, setData] = useState(JSONDATA)
    var [filterNameInit,setFilterNameInit] = useState('No filter here...')

  function FilterFunction(){
    setFilterNameInit("Sort by increasing price")
    setData(data.slice().sort((a,b) => a.price - b.price))
    ReactDOM.render(<MenuInGen arr={data.slice().sort((a,b) => a.price - b.price)}/>, document.getElementById('MenuFirst'))
  }
  
  function FilterFunctionDesc(){
    setFilterNameInit('Sort by decreasing price')
    setData(data.slice().sort((a,b) => -a.price + b.price))
    ReactDOM.render(<MenuInGen arr={data.slice().sort((a,b) => -a.price + b.price)}/>, document.getElementById('MenuFirst'))
  }

  function NoFilterFunction(){
    setFilterNameInit('No filter here...')
    setData(JSONDATA)
    ReactDOM.render(<MenuInGen arr={JSONDATA}/>, document.getElementById('MenuFirst'))
  }
  

  return (
    <div class="dropdown" style={{position:'absolute', right:'62px',top:'90px'}}>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
  style={{backgroundColor: '#F0A12A',width:'200px',height:'52px'}}>
    {filterNameInit}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
    <li><button type="button" class="btn btn-outline-primary dropdown-item"  onClick={FilterFunction}>Sort by increasing price</button></li>
    <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={FilterFunctionDesc}>Sort by decreasing price</button></li>
    <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={NoFilterFunction}>No filter here...</button></li>
  </ul>
</div>
  );
}
  return (
      <div >
      <div>
        <FilterBar />
      </div>
      <div style={{width:'100%'}}>
          <FoodTypeList />
      </div>
      <div style={{backgroundColor:'#efefef',height:'750px',width:'100%',marginLeft:'50px'}}>
          {
            arr.map((val) => {
            return <FoodInMenu name={val.food_name} price={val.price} image={val.img} />
          })
          }
      </div>
      </div>
  );
}


function TaskSearch() { 

  const [searchTerm,setSearchTerm] = useState('')
  const [data, setData] = useState(JSONDATA)
  var [filterNameInit,setFilterNameInit] = useState('No filter here...')

  function FilterBar() {
  
    function FilterFunction(){
      setFilterNameInit("Sort by increasing price")
      setData(data.slice().sort((a,b) => a.price - b.price))
      ReactDOM.render(<MenuInGen arr={data.slice().sort((a,b) => a.price - b.price)}/>, document.getElementById('MenuFirst'))
    }
    
    function FilterFunctionDesc(){
      setFilterNameInit('Sort by decreasing price')
      setData(data.slice().sort((a,b) => -a.price + b.price))
      ReactDOM.render(<MenuInGen arr={data.slice().sort((a,b) => -a.price + b.price)}/>, document.getElementById('MenuFirst'))
    }
  
    function NoFilterFunction(){
      setFilterNameInit('No filter here...')
      setData(JSONDATA)
      ReactDOM.render(<MenuInGen arr={JSONDATA}/>, document.getElementById('MenuFirst'))
    }
    
  
    return (
      <div class="dropdown" style={{position:'absolute', right:'62px',top:'90px'}}>
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
    style={{backgroundColor: '#F0A12A',width:'200px',height:'52px'}}>
      {filterNameInit}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
      <li><button type="button" class="btn btn-outline-primary dropdown-item"  onClick={FilterFunction}>Sort by increasing price</button></li>
      <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={FilterFunctionDesc}>Sort by decreasing price</button></li>
      <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={NoFilterFunction}>No filter here...</button></li>
    </ul>
  </div>
    );
  }

return (
  <div>
   <div id="MenuFirst" style={{height:'1100px',backgroundColor:'#efefef'}}>
    <MenuInGen arr={JSONDATA}/>
  </div> 

  <div style={{height:'50px',backgroundColor:'#efefef'}}>
  <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center pagination-lg">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
  </div>
  </div>
);
}



export default TaskSearch;
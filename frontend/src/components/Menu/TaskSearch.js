import React from "react";
import { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import FoodInMenu from './FoodInMenu.js';
import { FoodEditor } from "../staff/FoodEditor.js";

const axios = require('axios')

var arr = []

var Init = []


function TaskSearch() {

  const tmp = Init.slice()
  const [temp, setTemp] = useState(tmp)
  const [filterNameInit,setFilterNameInit] = useState('Không lựa chọn')
  const [data, setData] = useState(tmp)
  const [pageNumber,setPageNumber] = useState(1)
  const [init,setInit] = useState(Init)
  const [colorVar,setColorVar] = useState(['#F63C3C','#000000','#000000','#000000','#000000'])
  const [borderRadiusVar,setBorderRadiusVar] = useState(['50px','12px','12px','12px','12px'])
  const [borderColorVar,setBorderColor] = useState(['#F63C3C','#ffffff','#ffffff','#ffffff','#ffffff'])
  const [boxShadowVar,setBoxShadowVar] = useState(['1px 1px #F63C3C','None','None','None','None'])

  useEffect(() => {
    axios.get('/food')
    .then( (res) => {
      arr = res.data
      document.getElementById("Combo").click()
    })
    }, [])
function FoodTypeList() {
  function ChangeEffective(e){
      //setPageNumber(1)
      var JSONDATA = []
      JSONDATA.length = 0
      for(var i=0;i < arr.length;i++) {
        if (arr[i].type === e.target.id) {
          var t = {
            food_name: arr[i].name,
            price: arr[i].price,
            img: arr[i].imageUrls[0],
            id: arr[i]._id,
            discount: arr[i].discount
          }
          JSONDATA.push(t)
        }
    }


const array = ['Combo','Foody','Drink','Appetizer','Dessert']

    setFilterNameInit('Không lựa chọn')
    setTemp(JSONDATA.slice())
    setData(JSONDATA.slice())
    setInit(JSONDATA.slice())
    switch(e.target.id) {
      case 'Combo':
        setColorVar(['#F63C3C','#000000','#000000','#000000','#000000'])
        setBorderRadiusVar(['50px','12px','12px','12px','12px'])
        setBorderColor(['#F63C3C','#ffffff','#ffffff','#ffffff','#ffffff'])
        setBoxShadowVar(['1px 1px #F63C3C','None','None','None','None'])
        break;
      case 'Foody':
        setColorVar(['#000000','#F63C3C','#000000','#000000','#000000'])
        setBorderRadiusVar(['12px','50px','12px','12px','12px'])
        setBorderColor(['#ffffff','#F63C3C','#ffffff','#ffffff','#ffffff'])
        setBoxShadowVar(['None','1px 1px #F63C3C','None','None','None'])
        break;
      case 'Drink':
        setColorVar(['#000000','#000000','#F63C3C','#000000','#000000'])
        setBorderRadiusVar(['12px','12px','50px','12px','12px'])
        setBorderColor(['#ffffff','#ffffff','#F63C3C','#ffffff','#ffffff'])
        setBoxShadowVar(['None','None','1px 1px #F63C3C','None','None'])
        break;
      case 'Appetizer':
        setColorVar(['#000000','#000000','#000000','#F63C3C','#000000'])
        setBorderRadiusVar(['12px','12px','12px','50px','12px'])
        setBorderColor(['#ffffff','#ffffff','#ffffff','#F63C3C','#ffffff'])
        setBoxShadowVar(['None','None','None','1px 1px #F63C3C','None'])
        break;
      case 'Dessert':
        setColorVar(['#000000','#000000','#000000','#000000','#F63C3C'])
        setBorderRadiusVar(['12px','12px','12px','12px','50px'])
        setBorderColor(['#ffffff','#ffffff','#ffffff','#ffffff','#F63C3C'])
        setBoxShadowVar(['None','None','None','None','1px 1px #F63C3C'])
        break;
    }
}



return (
    <div id="ButtonList" class="row align-items-center" style={{height:'100px'}}
    >
        <div class="col-md-2 col-sm-2 col-2">
        <Button id="Combo" class="btn btn-light text-danger"
        variant="primary" onClick={ChangeEffective}
        style={{ width:'150px', height:'52px',backgroundColor:'#ffffff', boxShadow:boxShadowVar[0],
        borderColor:borderColorVar[0],fontWeight:'bold',color:colorVar[0],borderRadius:borderRadiusVar[0] }}>
        Combo
        </Button></div>
        <div class="col-md-2 col-sm-2 col-2">
        <Button id="Foody" class="btn btn-light text-danger"
        variant="primary" onClick={ChangeEffective}
        style={{ width:'150px', height:'52px',backgroundColor:'#ffffff',boxShadow:boxShadowVar[1],
        borderColor:borderColorVar[1],fontWeight:'bold',color:colorVar[1],borderRadius:borderRadiusVar[1] }}>
        {"Đồ Ăn"}
        </Button></div>
        <div class="col-md-2 col-sm-2 col-2">
        <Button id="Drink" class="btn btn-light text-danger"
        variant="primary" onClick={ChangeEffective}
        style={{ width:'150px', height:'52px',backgroundColor:'#ffffff',boxShadow:boxShadowVar[2],
        borderColor:borderColorVar[2],fontWeight:'bold',color:colorVar[2],borderRadius:borderRadiusVar[2] }}>
        {"Thức Uống"}
        </Button></div>
        <div class="col-md-2 col-sm-2 col-2">
        <Button id="Appetizer" class="btn btn-light text-danger"
        variant="primary" onClick={ChangeEffective}
        style={{ width:'150px', height:'52px',backgroundColor:'#ffffff',boxShadow:boxShadowVar[3],
        borderColor:borderColorVar[3],fontWeight:'bold',color:colorVar[3],borderRadius: borderRadiusVar[3] }}>
        {"Khai Vị"}
        </Button></div>
        <div class="col-md-2 col-sm-2 col-2">
        <Button id="Dessert" class="btn btn-light text-danger"
        variant="primary" onClick={ChangeEffective}
        style={{ width:'150px', height:'52px',backgroundColor:'#ffffff',boxShadow:boxShadowVar[4],
        borderColor:borderColorVar[4],fontWeight:'bold',color:colorVar[4],borderRadius:borderRadiusVar[4] }}>
        {"Tráng Miệng"}
        </Button></div>
        <div class="col-md-2 col-sm-4 col-4">
        <FilterBar />
        </div>
    </div>
  );
}

  function MenuInGen({arr}) {
    return (
        <div>
        <div style={{width:'100%'}}>
            <FoodTypeList />
        </div>
        { JSON.parse(localStorage.getItem("isAuthenticated")) ?
        <FoodEditor mode="add"/>
        : ""
        }
        <div style={{width:'100%'}}>
            {
               arr.slice(0,10).map((val) => {
               return <FoodInMenu name={val.food_name} price={val.price} image={val.img} id={val.id} discount={val.discount}/>
             })
             }
        </div>
        </div>
    );
  }

  function FilterFunction(){
    setPageNumber(1)
    setFilterNameInit('Giá từ thấp đến cao')
    setTemp(temp.sort((a,b) => a.price - b.price))
    setData(temp)
  }

  function FilterFunctionDesc(){
    setPageNumber(1)
    setFilterNameInit('Giá từ cao đến thấp')
    setTemp(temp.sort((a,b) => -a.price + b.price))
    setData(temp)
  }

  function NoFilterFunction(){
    setPageNumber(1)
    setFilterNameInit('Không lựa chọn')
    setTemp(init.slice())
    setData(init.slice())
  }

  function FilterBar() {
    return (
      // style={{position:'absolute', right:'62px',top:'90px'}}
      <div class="dropdown" >
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
    style={{backgroundColor: 'rgb(246, 60, 60)',width:'200px',height:'52px'}}>
      {filterNameInit}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
      <li><button type="button" class="btn btn-outline-primary dropdown-item" style={{width:'200px'}} onClick={FilterFunction}>Giá từ thấp đến cao</button></li>
      <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={FilterFunctionDesc}>Giá từ cao đến thấp</button></li>
      <li><button type="button" class="btn btn-outline-primary dropdown-item" onClick={NoFilterFunction}>Không lựa chọn</button></li>
    </ul>
  </div>
    );
  }

function Page(index) {
  setData(temp)
  setPageNumber(index)
  var menu = temp.slice((index-1)*10,10 + (index-1)*10)
  setData(menu)

  window.location.href = "#"
}

function ChangePage(index){
  if(index > Math.ceil(temp.length / 10) || index < 1) return;
  setData(temp)
  setPageNumber(index)
  var menu = temp.slice((index-1)*10,10 + (index-1)*10)
  setData(menu)

  window.location.href = "#"
}
return (
  <div>
  {/* style={{height:'950px',backgroundColor:'#efefef'}} */}
   <div id="MenuFirst" style={{margin:'auto'}}>
   <MenuInGen arr={data}/>
  </div>
  <div id="PaginationSearch" >
  <nav  aria-label="Page navigation example">
  <ul class="pagination justify-content-center pagination-lg">
    <li class="page-item">
    <button class="page-link text-primary" aria-label="Previous" onClick={() => ChangePage(pageNumber-1)} style={{color:'rgb(246, 60, 60)'}}>
        <span aria-hidden="true">&laquo;</span>
      </button>
    </li>
    {
    Array.from({length: Math.ceil(temp.length / 10)}, (_, i) => i + 1).map((index) =>
    {return <li class="page-item"><button class="page-link text-primary" onClick={() => Page(index)} style={{color:'rgb(246, 60, 60)'}}>{index}</button></li>})
    }
    {/* <li class="page-item"><button class="page-link" onClick={Page2}>2</button></li>
    <li class="page-item"><button class="page-link" onClick={Page3}>3</button></li> */}
    <li class="page-item">
      <button class="page-link text-primary" aria-label="Next" onClick={() => ChangePage(pageNumber+1)} style={{color:'rgb(246, 60, 60)'}}>
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
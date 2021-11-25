import React from "react";
import { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import FoodInMenu from './FoodInMenu.js';

const axios = require('axios')

// axios.get('http://localhost:8080')
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err))







// const axios = require('axios')
var arr = []

var Init = [
{"food_name":"Combo Khỏe Mạnh","price":34000,"img":"https://phanphoiruounhapkhau.com/wp-content/uploads/2021/04/healthy-food-la-gi-nguyen-tac-khi-giam-can-bang-che-do-an-clean-eating.jpg","id":"618eb8bfc195fbd6f3d8983d"},
{"food_name":"Combo Rau Củ","price":84000,"img":"https://zicxa.com/vi/uploaded/files/rong-nho-giam-can-2-1.jpg","id":"619229f1792fa260bd3a1003"},
{"food_name":"Combo Phô Mai","price":76000,"img":"https://tokbokki.com/wp-content/uploads/banh-gao-pho-mai.jpg","id":"6193cfa43e278583b22570c9"},
{"food_name":"Combo 1","price":54000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbC-GSyu_vAWtTAEhmq7A2OmOV9f1IbXudw&usqp=CAU","id":"6193cfac3e278583b22570ca"},
{"food_name":"Combo Bò Ngũ Vị","price":48000,"img":"https://haisanbaba.com/wp-content/uploads/6834b901e85d14034d4c.jpg","id":"6193cfb13e278583b22570cb"},
{"food_name":"Combo Bò Nướng","price":99000,"img":"https://cdn.dealtoday.vn/img/s630x420/a59fb6441a5547bb893f14565d84d6c6.jpg?sign=GXpsDTTdBfZBlxbPIruqBQ","id":"6193cfb73e278583b22570cc"},
{"food_name":"Combo Xiên Que","price":49000,"img":"https://www.vibrantplate.com/wp-content/uploads/2018/07/Tofu-skewers-03-735x490.jpg","id":"6193cfbc3e278583b22570cd"},
{"food_name":"Combo Gà Cay","price":46000,"img":"https://ameovat.com/wp-content/uploads/2016/05/cach-lam-ga-ran.jpg","id":"6193cfc23e278583b22570ce"},
{"food_name":"Combo Gà Sốt Kem","price":82000,"img":"https://songkhoe.medplus.vn/wp-content/uploads/2020/03/uc-ga-sot-kem-meo-1.png","id":"6193cfc73e278583b22570cf"},
{"food_name":"Combo 2","price":30000,"img":"https://assets.grab.com/wp-content/uploads/sites/11/2020/04/03164942/111.jpg","id":"6193cfcc3e278583b22570d0"},
{"food_name":"Combo Cá Hồi","price":237000,"img":"https://www.topuytin.com/wp-content/uploads/2018/05/fresh-salmon-sushi-rolls.jpg","id":"6193cfd33e278583b22570d1"},
{"food_name":"Combo Sushi","price":150000,"img":"https://kenh14cdn.com/2019/1/22/5bc7df9876ec5729a74dbca5-2018-10-18-011920-15481331553641106349192.jpg","id":"6193cfd93e278583b22570d2"},
]


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
    })
    }, [])


function FoodTypeList() {


const array = ['Combo','Foody','Drink','Appetizer','Dessert']

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
          id: arr[i]._id
        }
        console.log(t)
        JSONDATA.push(t)
      }
  }
    setFilterNameInit('Không lựa chọn')
    setTemp(JSONDATA.slice())
    setData(JSONDATA.slice())
    setInit(JSONDATA.slice())
    // let idChange = document.getElementById(e.target.id)
    // idChange.style.borderRadius = '50px'
    // idChange.style.borderColor = '#F63C3C'
    // idChange.style.color = '#F63C3C'
    // idChange.style.boxShadow = '1px 1px #F63C3C'
    // for(let i=0;i<array.length;i++) {
    //     if (array[i] === e.target.id) continue;
    //     else {
    //       let idNormal = document.getElementById(array[i])
    //         idNormal.style.borderColor='#ffffff'
    //         idNormal.style.color='#000000'
    //         idNormal.style.borderRadius='12px'
    //         idNormal.style.boxShadow='None'
    //     }
    // }
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
    <div id="ButtonList" class="row align-items-center" style={{backgroundColor:'#F0FFFF',height:'100px'}}
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
        <div style={{width:'100%'}}>
            {
               arr.slice(0,10).map((val) => {
               return <FoodInMenu name={val.food_name} price={val.price} image={val.img} id={val.id}/>
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
    style={{backgroundColor: '#F0A12A',width:'200px',height:'52px'}}>
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
  window.scrollTo(0, 0)
}

function ChangePage(index){
  if(index > Math.ceil(temp.length / 10) || index < 1) return;
  setData(temp)
  setPageNumber(index)
  var menu = temp.slice((index-1)*10,10 + (index-1)*10)
  setData(menu)
  window.scrollTo(0, 0)
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
    <button class="page-link" aria-label="Previous" onClick={() => ChangePage(pageNumber-1)}>
        <span aria-hidden="true">&laquo;</span>
      </button>
    </li>
    {
    Array.from({length: Math.ceil(temp.length / 10)}, (_, i) => i + 1).map((index) =>
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
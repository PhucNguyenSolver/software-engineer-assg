import { Nav, Navbar, Form, FormControl, Col } from 'react-bootstrap'
import './Appbar.css'
import logo from './logo.png'
import {removeVI, DefaultOption} from 'jsrmvi';


import React from "react";
import RenderElement from '../Menu/RenderElement'
import JSONDATA from '../Menu/MOCK_DATA'
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FoodTypeList from '../Menu/FoodTypeList'
import FoodInMenu from '../Menu/FoodInMenu'
// import Filter from './Filter';

// Combo: 12, Foody: 13, Drink: 15, Appetizer: 14, Dessert: 16

import { API_ENDPOINT } from "../../config";

const axios = require('axios')
axios.defaults.baseURL = API_ENDPOINT;
var arrAll = []

export default function Appbar({nCartItem}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState(arrAll)
  var filtered;
  var pagingSearch;
  var pageNumber = 1


  useEffect(() => {
    axios.get('/food')
    .then( (res) => {
      for(var i = 0;i<res.data.length;++i){
        var temp = {
          food_name: res.data[i].name,
          price: res.data[i].price,
          img: res.data[i].imageUrls[0],
          id: res.data[i]._id,
          discount: res.data[i].discount
        }
        arrAll.push(temp)
      }
    })
    }, [])


  function ChangePage(index){
    if(index > Math.ceil(filtered.length / 10) || index < 1) return;
    pageNumber = index
    var menu = []
    for(var i = (index-1)*10 ; i < 10 + (index-1)*10 ; i++){
      if(i >= filtered.length) {
        if(i%10 <=5) {
          // document.getElementById('PaginationSearch').style.bottom = '30%'
          // document.getElementById('MenuFirst').style.height = '500px'
          break;
        }
      }
      menu[i] = <FoodInMenu name={data[i].food_name} price={data[i].price} image={data[i].img} id={data[i].id} />
      // document.getElementById('PaginationSearch').style.bottom = '-34%'
      // document.getElementById('MenuFirst').style.height = '900px'
    }
    ReactDOM.render(menu,document.getElementById('MenuFirst'))
    window.scrollTo(0, 0)
  }
  function Page(index) {
    pageNumber = index
    var menu = []
    for(var i = (index-1)*10 ; i < 10 + (index-1)*10 ; i++){
      if(i >= filtered.length) {
        if(i%10 <=5) {
          // document.getElementById('PaginationSearch').style.bottom = '30%'
          // document.getElementById('MenuFirst').style.height = '500px'
          break;
        }
      }
      menu[i] = <FoodInMenu name={data[i].food_name} price={data[i].price} image={data[i].img} id={data[i].id}/>
      // document.getElementById('PaginationSearch').style.bottom = '-34%'
      // document.getElementById('MenuFirst').style.height = '900px'
    }
     
    ReactDOM.render(menu,document.getElementById('MenuFirst'))
    window.scrollTo(0, 0)
  }

  function HandleSearch(searchKey) {
    if (searchKey === "") {
      window.location.href = "/menu"
    }
    else {
    filtered = arrAll.filter((val)=>{
      if (removeVI(val.food_name.toLowerCase()).includes(removeVI(searchKey.toLowerCase()))){
          return val
      }
      }).map((val,key) => {        
      return <div key ={key} style={{display:'inline-block',marginBottom:'2.3%',marginTop:'3%'}}>
      <RenderElement val={val}/>
      </div>  
      })
    pagingSearch= <nav aria-label="Page navigation example" >
    <ul class="pagination justify-content-center pagination-lg">
    <li class="page-item">
    <button class="page-link" aria-label="Previous" onClick={() => ChangePage(pageNumber-1)}>
        <span aria-hidden="true">&laquo;</span>
      </button>
    </li>
      {
      Array.from({length: Math.ceil(filtered.length / 10)}, (_, i) => i + 1).map((index) => 
      {return <li class="page-item"><button class="page-link" onClick={() => Page(index)}>{index}</button></li>})
      }
      <li class="page-item">
      <button class="page-link" aria-label="Next" onClick={() => ChangePage(pageNumber+1)}>
        <span aria-hidden="true">&raquo;</span>
      </button>
    </li>
    </ul>
  </nav>
    ReactDOM.render(filtered.slice(0,10),document.getElementById('MenuFirst'))  
    ReactDOM.render(pagingSearch,document.getElementById('PaginationSearch')) // edited
  }

  function MenuInGen({arr}) {
    
  const temp = arrAll.slice()
  const [filterNameInit,setFilterNameInit] = useState('No filter here...'.slice())
  const [data, setData] = useState(temp)

  function FilterBar() {
    
  function FilterFunction(){
    setFilterNameInit('Sort by increasing price')
    setData(data.slice().sort((a,b) => a.price - b.price))
    ReactDOM.render(<MenuInGen arr={data.sort((a,b) => a.price - b.price)}/>, document.getElementById('MenuFirst'))
  }
  
  function FilterFunctionDesc(){
   setFilterNameInit('Sort by decreasing price')
    setData(data.slice().sort((a,b) => -a.price + b.price))
    ReactDOM.render(<MenuInGen arr={data.sort((a,b) => -a.price + b.price)}/>, document.getElementById('MenuFirst'))
  }

  function NoFilterFunction(){
   setFilterNameInit('No filter here...')
    setData(arrAll.slice())
    ReactDOM.render(<MenuInGen arr={arrAll.slice()}/>, document.getElementById('MenuFirst'))
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
        <div style={{ width: '100%' }}>
          <FoodTypeList />
        </div>
        <div id="ElementInMenu" style={{width:'100%',marginLeft:'50px'}}>
            {
              arr.map((val) => {
              return <FoodInMenu name={val.food_name} price={val.price} image={val.img} id={val.id}/>
            })
          }
        </div>
      </div>
    );
  }
  }

  const LogInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="#000000" class="bi bi-person-circle" viewBox="0 0 16 16">
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
    </svg>
  )

  const LogOutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="#000000" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
      <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
    </svg>
  )

  function DisplayLog() {
    if (localStorage.getItem("isAuthenticated")) { 
      return (
      <Nav.Link onClick={() => {
        localStorage.removeItem("isAuthenticated")
      }} href='/login'>
        <LogOutIcon />
      </Nav.Link>
      )
    }
    else { 
      return (
      <Nav.Link href='/login'>
        <LogInIcon />
      </Nav.Link>
      )
    } 
  }

    return (
      <div class="py-0 color-appbar">
        <Navbar expand="lg" sticky="top">
          <Navbar.Brand href='/' class="text-primary">
              <img src={logo} width="30" alt="logo image"/>
                Nhi's House          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href='/'><span className="navItem">Trang chủ</span></Nav.Link>
                <Nav.Link href='/menu'><span className="navItem">Thực đơn</span></Nav.Link>
                <Nav.Link href='/manage-order'><span className="navItem">Đơn hàng</span></Nav.Link>
                <Nav.Link href='#footer'><span className="navItem">Giới thiệu</span></Nav.Link>
            </Nav>
          <Form className="d-flex">
            <Col xs="auto">
            <FormControl
              type="search"
              placeholder="Tìm kiếm món ăn, combo..."
              className="me-5 search-appbar"
              aria-label="Search"
              size="sm"
              onKeyPress={event => {
              if(event.key == "Enter") 
              {
                HandleSearch(event.target.value)
                event.preventDefault()
              }
              setSearchTerm(event.target.value)
              }}
            />
            </Col>
          </Form>
          <Nav>
            <Nav.Link href='/my-cart'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="#000000" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <sup><span class="badge rounded-pill bg-danger">{nCartItem}</span></sup>
              <span class="visually-hidden">Giỏ hàng</span>
            </Nav.Link>
            <DisplayLog />
          </Nav>
          {/* <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
            <li class="nav-item col-6 col-md-auto">
              <a href="#cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              </a>
            </li>
            <li class="nav-item col-6 col-md-auto">
              <a href="#profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="30%" fill="#000000" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
              </a>
            </li>
          </ul> */}
          </ Navbar.Collapse>
        </Navbar>

        {/* <div id = "pagingCheck" style={{position:'absolute',bottom:'-38%',marginLeft:'42%',marginRight:'auto'}}>

        </div> */}
        </div>
    )
        
  }
        

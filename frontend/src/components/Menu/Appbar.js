import {Nav, Navbar, Form, FormControl, Col} from 'react-bootstrap'
import './Appbar.css'

import React from "react";
//import MenuInGen from './MenuInGen.js'
// import RenderElement from './RenderElement.js'
// import FilterBar from './FilterBar.js'
// import JSONDATA from './MOCK_DATA.json'
// import { useState } from 'react';
// import ReactDOM from 'react-dom';
// import FoodTypeList from './FoodTypeList.js'
// import FoodInMenu from './FoodInMenu.js'

export default function Appbar({onChangeFunc}) {

    return (
        <Navbar expand="lg" sticky="top" className="color-appbar">
          <Navbar.Brand href='/'>Your logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href='/'><span className="navItem">Trang chủ</span></Nav.Link>
                <Nav.Link href='/menu' >
                <span className="navItem">Thực đơn</span>
                </Nav.Link>
                <Nav.Link href='#'><span className="navItem">Đơn hàng</span></Nav.Link>
                <Nav.Link href='/Footer'><span className="navItem">Giới thiệu</span></Nav.Link>
            </Nav>
          <Form className="d-flex">
            <Col xs="auto">
            <FormControl
              type="search"
              placeholder="Tìm kiếm món ăn, combo..."
              className="me-5 search-appbar"
              aria-label="Search"
              size="sm"
              onKeyPress={onChangeFunc}
            />
            </Col>
          </Form>
          <Nav>
            <Nav.Link href='/cart'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="#000000" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <sup><span class="badge rounded-pill bg-danger">10</span></sup>
              <span class="visually-hidden">Giỏ hàng</span>
            </Nav.Link>
            <Nav.Link href='#'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="#000000" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
              <span class="visually-hidden">Thông tin cá nhân</span>
            </Nav.Link>
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
        
    )
}
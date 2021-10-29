import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import {Button} from 'react-bootstrap';
import FoodType from './FoodType.js'
import NormalFoodType from './NormalFoodType.js'

function FoodTypeList() {

    return (
        <div style={{backgroundColor:'#15615454',height:'100px', width:'60%'}}
        >
            <FoodType name={"Combo"} style={{marginLeft:'20px'}} />
            <NormalFoodType name={"Đồ ăn"} style={{marginLeft:'20px'}} />
            <NormalFoodType name={"Thức uống"} style={{marginLeft:'20px'}}/>
            <NormalFoodType name={"Khai vị"} style={{marginLeft:'20px'}}/>
            <NormalFoodType name={"Tráng miệng"} style={{marginLeft:'20px'}}/>
        </div>
      );
}


export default FoodTypeList;

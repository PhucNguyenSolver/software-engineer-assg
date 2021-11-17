import React from "react";
import {Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import JSONDATA from './MOCK_DATA.json';
//import NormalFoodType from './NormalFoodType.js'

function FoodTypeList() {

    const array = ['Combo','Foody','Drink','Appetizer','Dessert']

    function ChangeEffective(e){
        //console.log(e.target.id)
        var idChange = document.getElementById(e.target.id)
        idChange.style.borderRadius = '50px'
        idChange.style.borderColor = '#F63C3C'
        idChange.style.color = '#F63C3C'
        idChange.style.boxShadow = '1px 1px #F63C3C'
        for(var i=0;i<array.length;i++) {
            if (array[i] === e.target.id) continue;
            else {
                var idNormal = document.getElementById(array[i])
                idNormal.style.borderColor='#ffffff'
                idNormal.style.color='#000000'
                idNormal.style.borderRadius='12px'
                idNormal.style.boxShadow='None'
            }
        }
    }

    return (
        <div style={{backgroundColor:'#AFEEEE',height:'100px', width:'100%'}}
        >
            <Button id="Combo" class="btn btn-light text-danger" 
            variant="primary" onClick={ChangeEffective}
            style={{ width:'150px', height:'52px',backgroundColor:'#ffffff', 
            borderColor:'#ffffff',fontWeight:'bold',color:'#000000',margin: '25px 25px 25px 67px',borderRadius:'12px' }}>
            {"Combo"}
            </Button>
            <Button id="Foody" class="btn btn-light text-danger" 
            variant="primary" onClick={ChangeEffective}
            style={{ width:'150px', height:'52px',backgroundColor:'#ffffff', 
            borderColor:'#ffffff',fontWeight:'bold',color:'#000000',margin: '15px 20px',borderRadius:'12px' }}>
            {"Đồ ăn"}
            </Button>
            <Button id="Drink" class="btn btn-light text-danger" 
            variant="primary" onClick={ChangeEffective}
            style={{ width:'150px', height:'52px',backgroundColor:'#ffffff', 
            borderColor:'#ffffff',fontWeight:'bold',color:'#000000',margin: '15px 20px',borderRadius:'12px' }}>
            {"Thức uống"}
            </Button>
            <Button id="Appetizer" class="btn btn-light text-danger" 
            variant="primary" onClick={ChangeEffective}
            style={{ width:'150px', height:'52px',backgroundColor:'#ffffff', 
            borderColor:'#ffffff',fontWeight:'bold',color:'#000000',margin: '15px 20px',borderRadius:'12px' }}>
            {"Khai vị"}
            </Button>
            <Button id="Dessert" class="btn btn-light text-danger" 
            variant="primary" onClick={ChangeEffective}
            style={{ width:'150px', height:'52px',backgroundColor:'#ffffff', 
            borderColor:'#ffffff',fontWeight:'bold',color:'#000000',margin: '15px 20px',borderRadius:'12px' }}>
            {"Tráng miệng"}
            </Button>
        </div>
      );
}


export default FoodTypeList;

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import FoodInMenu from './FoodInMenu.js'
import FoodTypeList from './FoodTypeList.js'

function MenuTest() {
  return (
      <div>
          <FoodTypeList />
          <FoodInMenu />
          <FoodInMenu />
          <FoodInMenu />
          <FoodInMenu />
          <FoodInMenu /> 
          <FoodInMenu />
          <FoodInMenu />
          <FoodInMenu />
          <FoodInMenu />
          <FoodInMenu />    
      </div>
      

  );
}

export default MenuTest;
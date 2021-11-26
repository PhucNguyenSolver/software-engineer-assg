import React from "react";
import FoodTypeList from './FoodTypeList.js'
import FoodInMenu from './FoodInMenu.js'
import JSONDATA from './MOCK_DATA.json'





function MenuInGen() {
  return (
      <div>
      <div style={{width:'100%'}}>
          <FoodTypeList />
      </div>
      <div style={{width:'100%'}}>
          {
          JSONDATA.map((val) => {
            return <FoodInMenu name={val.food_name} price={val.price} image={val.img} id={val.id}/>
          })
          }
      </div>
      </div>
  );
}

export default MenuInGen;
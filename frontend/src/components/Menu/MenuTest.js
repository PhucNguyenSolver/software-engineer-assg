import React from "react";
import RenderElement from './RenderElement.js'
import FoodTypeList from './FoodTypeList.js'
import JSONDATA from './MOCK_DATA.json'


function MenuTest() {
  return (
      <div >
      <div style={{width:'100%'}}>
          <FoodTypeList />
      </div>
      <div style={{backgroundColor:'#F0F8FF',height:'750px',width:'100%'}}>
          {
          JSONDATA.map((val) => {
            return <RenderElement val={val} />
          })
          }
      </div>
      </div>
  );
}

export default MenuTest;
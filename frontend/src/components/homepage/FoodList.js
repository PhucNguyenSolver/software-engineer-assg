import React from "react";
import Food from "./Food";
import foods from "./foods.json";

// TODO: useContext for foods.json

export default function FoodList(props) {
  var rawFoods = foods.combo
  if(props.name === "combo") {
    rawFoods = foods.combo
  }
  else if(props.name === "drink") {
    rawFoods = foods.drink;
  }
  const listItems = rawFoods.map((afood) => (
    <div className="col-10 col-sm-4 col-md-3 col-xl-3">
      <Food food={afood}/>      
    </div>
  ));

  return (
    <div className="container overflow-hidden">
      <div className="row">
        <div className="col">
          <div class="mb-3 mt-3">
            <h3>COMBO HẤP DẪN TẠI CỬA HÀNG</h3>
          </div>
        </div>
      </div>
      <div className="row g-5 justify-content-center justify-content-sm-start mb-5">
        {listItems}
      </div>
    </div>
  );
}
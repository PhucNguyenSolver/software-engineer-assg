import React, { Component } from "react";
import Food from "./Food";
import foods from "./foods.json";

// TODO: useContext for foods.json

export default function FoodList() {  
  const rawFoods = foods.foods;
  const listItems = rawFoods.map((afood) => (
    <div className="col-10 col-sm-6 col-md-4 col-xl-3">
      <Food food={afood}/>      
    </div>
  ));

  return (
    <div className="container overflow-hidden">
      <div className="row">
        <div className="col">
          <div class="mb-4">
            <h1>COMBO HẤP DẪN TẠI CỬA HÀNG</h1>
          </div>
        </div>
      </div>
      <div className="row g-5 justify-content-center justify-content-sm-start">
        {listItems}
      </div>
    </div>
  );
}
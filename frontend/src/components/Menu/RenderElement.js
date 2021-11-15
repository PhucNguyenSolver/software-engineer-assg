import React from "react";
import FoodInMenu from './FoodInMenu.js'

function RenderFoodElement(props){
  return (
    <FoodInMenu name={props.val.food_name} price={props.val.price} image={props.val.img} />
  );
}

export default RenderFoodElement;
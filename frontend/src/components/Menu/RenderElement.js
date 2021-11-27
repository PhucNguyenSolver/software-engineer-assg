import React from "react";
import FoodInMenu from './FoodInMenu.js'

function RenderFoodElement(props){
  return (
    <FoodInMenu name={props.val.food_name} price={props.val.price} image={props.val.img} id={props.val.id} discount={props.val.discount}/>
  );
}

export default RenderFoodElement;
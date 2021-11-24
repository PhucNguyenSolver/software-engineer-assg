import React, {useState, useEffect} from "react";
import Food from "./Food";
import foods from "./foods.json";

const axios = require('axios');
// TODO: useContext for foods.json

export default function FoodList(props) {
  // var rawFoods = foods.combo
  // if(props.name === "combo") {
  //   rawFoods = foods.combo
  // }
  // else if(props.name === "drink") {
  //   rawFoods = foods.drink;
  // }
  const[rawFoods, setRawFoods] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:8080/order/top-food')
      .then(res => {
        setRawFoods(res.data);
      })
      .catch(err => {
        alert('Occur when loading foods in homepage')
      })
  }, [])
  if(!rawFoods) {
    return(
      <div><p>Loading</p></div>
    )
  }
  const listItems = rawFoods.map((afood) => (
    <div className="col-10 col-sm-6 col-md-4 col-xl-3">
      <Food food={afood}/>      
    </div>  
  ));

  return (
    <div className="container overflow-hidden">
      <div className="row">
        <div className="col">
          <div class="mb-3 mt-3">
            <h3>Món ăn được mua nhiều tại cửa hàng</h3>
          </div>
        </div>
      </div>
      <div className="row g-5 justify-content-center justify-content-sm-start mb-5">
        {listItems}
      </div>
    </div>
  );
}
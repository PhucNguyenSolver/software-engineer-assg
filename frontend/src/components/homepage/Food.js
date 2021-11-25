import React, { useState } from "react";
// import foodImage from "./img/ga_ran.png"
// import { Link } from "react-router-dom";
// import FoodList from "./FoodList";

// function addToCart(id) { // TODO: make this a callback with foodId
//   console.log("Add to cart: " + id);
// }

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Food(props) {
  const food = props.food;
  // const tmp = JSON.parse(food.description);
  // const listItems = tmp.map((d) => <li key={d}>{d}</li>);
  const discount = function () {
    let value = food.discount;
    if (value[value.length - 1] === '%') {
      value = parseFloat(value.substr(0, value.length - 1)) / 100
        * food.price;
    } else {
      value = parseInt(value)
    }
    return food.price - value;
  }
  const price = numberWithCommas(food.price) + 'đ';
  const discountPrice = numberWithCommas(discount()) + 'đ';

  const [showDetail, setShowDetail] = useState(false);
  const compactStyle = showDetail ? {} : {
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  };

  return (
    <div className="fluid-container overflow-hidden shadow rounded" >

      <img className="w-100 round" src={food.imageUrls[0]} alt=""/>
      <div className="px-3">
        <h3 className="my-2 my-sm-4">{food.name}</h3>
        <p><strike>{price}</strike></p>
        <h5>{discountPrice}</h5>
        <div style={compactStyle}>
          {food.description}
        </div>
        <h5>Đã mua: {food.no}</h5>
      </div>
      <div 
        className="d-flex justify-content-center"
        onClick={() => { setShowDetail(!showDetail); } }
      >
        {
          (showDetail) ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
          </svg> 
        }
      </div>
      <div className="d-flex justify-content-center">
        <div className="py-2 py-sm-3">
          <button 
            onClick={() => window.location.href="/food-info/" + food._id}
            className="btn btn-md shadow-none btn-primary"
          >
            Đặt hàng
          </button>
        </div>
      </div>

    </div>
  );
}

export default Food;
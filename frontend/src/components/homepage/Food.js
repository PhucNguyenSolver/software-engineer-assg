import React, { useState } from "react";
import foodImage from "./img/ga_ran.png"
import 'bootstrap/dist/css/bootstrap.css';

function addToCart() {
  console.log("Add to cart");
}

function Food() {
  const [detail, setDetail] = useState(false);
  
  const compactStyle = detail ? {} : {
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  };

  const description =(
    <div style={compactStyle}>
      <ul>
        <li>2 Miếng Gà Giòn Cay / 2 Miếng Gà Giòn Không Cay / 2 Miếng Gà Truyền thống</li>
        <li>1 Pepsi Lon</li>
      </ul>
    </div>
  );

  return (
    <div className="fluid-container overflow-hidden shadow rounded">
      <img className="w-100 round" src={foodImage} alt=""/>
      <div className="px-3 pt-3">
        <h1 className="my-4">COMBO Gà rán A</h1>
        <h2>79,000đ</h2>
        {description}
      </div>
      <div 
        className="d-flex justify-content-center"
        onClick={() => { setDetail(!detail); } }
      >
        {
          (detail) ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
          </svg> 
        }
      </div>
      <div className="d-flex justify-content-center">
        <div className="pt-3 pb-3">
          <button 
            onClick={() => addToCart() }
            className="btn btn-primary btn-lg shadow-none"
          >
            Đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default Food;
import React, { useState } from "react";
import FoodList from "./FoodList";
// import Food from "./Food";

const categories = [
  {
    imageUrl: "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
    name: "Combo",
    link: "/combo"
  },
  {
    imageUrl: "https://kfcvietnam.com.vn/uploads/product/d9e2a3a3bd13fcf569f714339220ea7b.png",
    name: "Đồ uống",
    link: "/drink"
  },
  {
    imageUrl: "https://kfcvietnam.com.vn/uploads/combo/c21e391e9447babbc5ec76a902b68d88.jpg",
    name: "Hamburger",
    link: "/hamburger"
  },
  {
    imageUrl: "https://kfcvietnam.com.vn/uploads/combo/68c63acecebbd5752530e3064e5d6cfb.jpg",
    name: "Gà rán",
    link: "/toast"
  },
  // {
  //   imageUrl: "./img/default_background.png",
  //   name: "Gà rán",
  //   link: "/toast"
  // },
  // {
  //   imageUrl: "./img/default_background.png",
  //   name: "Gà rán",
  //   link: "/toast"
  // }
];

function handleFilterItemClick(link) {
  console.log("Filter: " + link); // TODO: filter or sort - Thien Toan assigned
}

// function ShowFiltered(props) {
//   if(props.name === "/combo") {
//     return (<FoodList name="combo" />);
//   }
//   else if(props.name === "/drink") {
//     return (<FoodList name="drink" />);
//   }
//   return <FoodList name="combo" />
// }

function FilterItem(props) {
  const buttonClass = props.isActive ? "border border-primary border-5 rounded-3": "";

  return (
    <div className="fluid-container overflow-hidden">
      <div className="position-relative align-items-center justify-content-center">
        <div className={buttonClass}>
          <img className="w-100 opacity-75" src={props.imageUrl} alt=""/>
          <div className="position-absolute top-50 start-50 translate-middle">
            <h3>{props.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function Filter() {
  const [expectedName, setExpectedName] = useState('');
  let filterLink;

  function renderPlaceHolder(i) {
    return (
      <>
      <div 
        className="col-6 col-sm-4 col-md-3 col-lg-2"
        onClick={() => {
          setExpectedName(categories[i].name);
          handleFilterItemClick(categories[i].link);
          filterLink = categories[i].link;
        }}
      >
        <FilterItem 
          name={categories[i].name}
          imageUrl={categories[i].imageUrl} // TODO: use image from the web
          isActive={categories[i].name === expectedName}
        />
      </div>
      
      </>
    );
  }

  console.log(filterLink);
  return (
    <div className="fluid-container overflow-hidden">
      <div className="row g-3 justify-content-center">
        {categories.map((item, index) => renderPlaceHolder(index))}
      </div>
      
      <FoodList />
    </div>
  );

}

export default Filter
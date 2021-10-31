import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import defaultImage from "./img/default_background.png";

const categories = [
  {
    imageUrl: "./img/default_background.png",
    name: "Combo",
    link: "/combo"
  },
  {
    imageUrl: "./img/default_background.png",
    name: "Đồ uống",
    link: "/drink"
  },
  {
    imageUrl: "./img/default_background.png",
    name: "Hamburger",
    link: "/hamburger"
  },
  {
    imageUrl: "./img/default_background.png",
    name: "Gà rán",
    link: "/toast"
  },
  {
    imageUrl: "./img/default_background.png",
    name: "Gà rán",
    link: "/toast"
  },
  {
    imageUrl: "./img/default_background.png",
    name: "Gà rán",
    link: "/toast"
  }
];

function handleFilterItemClick(link) {
  console.log("Filter: " + link); // TODO: filter or sort - Thien Toan assigned
}

function FilterItem(props) {
  const buttonClass = props.isActive ? "border border-primary border-5 rounded-3" : "";
  
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
  
  function renderPlaceHolder(i) {
    return (
      <div 
        className="col-6 col-sm-4 col-md-3 col-lg-2"
        onClick={() => {
          setExpectedName(categories[i].name);
          handleFilterItemClick(categories[i].link); 
        }}
      >
        <FilterItem 
          name={categories[i].name}
          imageUrl={defaultImage} // TODO: use image from the web
          isActive={categories[i].name === expectedName}
        /> 
      </div>
    );
  }
  
  return (
    <div className="fluid-container overflow-hidden">
      <div className="row g-3 justify-content-start">
        {categories.map((item, index) => renderPlaceHolder(index))}
      </div>
    </div>
  );
}

export default Filter
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import defaultImage from "./img/default_background.png";

function CategoryItem(props) {
  const isActive = props.isActive;
  const buttonClass = isActive ? "border border-primary border-5 rounded-3" : "";
  
  return (
    <div className="fluid-container overflow-hidden">
      <div className="position-relative align-items-center justify-content-center">
        <div className={buttonClass}>
          <img className="w-100 opacity-75" src={defaultImage} alt=""/>
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
  
  function renderPlaceHolder(name, link) {
    let isActive = (name === expectedName);
    return (
      <div 
        className="col-6 col-sm-4 col-md-3 col-lg-2"
        onClick={() => {setExpectedName(name);}}
      >
        <CategoryItem 
          name={name}
          link={link}
          isActive={isActive}
        /> 
      </div>
    );
  }
  
  return (
    <div className="fluid-container overflow-hidden">
      <div className="row g-3 justify-content-start">
        {renderPlaceHolder('Combo', '/combo')}
        {renderPlaceHolder('Đồ uống', '/drink')}
        {renderPlaceHolder('Hamburger', '/hamburger')}
        {renderPlaceHolder('Gà rán', '/toast')}
        {renderPlaceHolder('Gà rán', '/toast')}
        {renderPlaceHolder('Gà rán', '/toast')}
      </div>
    </div>
  );
}

export default Filter
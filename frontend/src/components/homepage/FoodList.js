import React, { Component } from "react";
import Food from "./Food";

class FoodList extends Component {
  constructor(prop) {
    super(prop);
    this.state = prop;
  }

  renderPlaceHolder() {
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Food />      
      </div>
    );
  }

  render() {
    return (
      <div className="fluid-container overflow-hidden">
        <div className="row">
          <div className="col">
            <div class="mb-4">
              <h1>COMBO HẤP DẪN TẠI CỬA HÀNG</h1>
            </div>
          </div>
        </div>
        <div className="row g-5 justify-content-start">
          {this.renderPlaceHolder()}
          {this.renderPlaceHolder()}
          {this.renderPlaceHolder()}
          {this.renderPlaceHolder()}
          {this.renderPlaceHolder()}
          {this.renderPlaceHolder()}
        </div>
      </div>
    );
  }
}

export default FoodList;
import React from "react";
import Appbar from "./Appbar"
import Banner from "./Banner"
import FoodList from "./FoodList";
import Filter from "./Filter";

function Homepage() {
  return (
    <div className="container">
        <Appbar />
        <Banner />
        <Filter />
        <FoodList />
    </div>
  );
}

export default Homepage;

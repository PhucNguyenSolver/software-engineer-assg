import React from "react";
import FoodList from "./FoodList";
import Filter from "./Filter";

function Homepage() {
  return (
    <div>
      <Filter />
      <FoodList />
    </div>
  );
}

export default Homepage;
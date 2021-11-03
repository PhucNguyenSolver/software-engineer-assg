import React from "react";
import Appbar from "./Appbar"
import Banner from "./Banner"
import Filter from "./Filter";
import Footer from "./Footer";

function Homepage() {
  return (
    <div className="container">
        <Banner />
        <Filter />
    </div>
  );
}

export default Homepage;

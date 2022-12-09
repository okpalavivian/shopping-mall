import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import "./Home.scss"

const Home = () => {
  return( <div className="home">
    <Slider />
    <FeaturedProduct type="featured" />
    <FeaturedProduct type="trending" />
  </div>)
};
export default Home;

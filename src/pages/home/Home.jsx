import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import "./Home.scss"
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return( <div className="home">
    <Slider />
    <FeaturedProduct type="featured" />
    <Categories />
    <FeaturedProduct type="trending" />
  </div>)
};
export default Home;

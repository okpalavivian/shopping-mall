import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import "./Home.scss"
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return( <div className="home">
    <Slider />
    <FeaturedProduct type="featured" />
    <Categories />
    <FeaturedProduct type="trending" />
    <Contact />
  </div>)
};
export default Home;

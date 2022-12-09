import React from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import "./Slider.scss"
import {useState} from "react"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
const data = [
"https://i.postimg.cc/7YqgFxPp/30-Latest-Ankara-Styles-For-Wedding-2021-2022-Claraito-s-Blog.jpg",
"https://i.postimg.cc/7YqgFxPp/30-Latest-Ankara-Styles-For-Wedding-2021-2022-Claraito-s-Blog.jpg",
"https://i.postimg.cc/XqhRbX8M/mother-g6f9c23460-640.jpg",
"https://i.postimg.cc/j2ZzwJ19/Ankara-Styles-2022-25-Attractive-latest-Ankara-long-gown-styles-For-Cute-Ladies.jpg",
];
const prevSlide =() => {
  setCurrentSlide (currentSlide === 0 ? 3 : (prev) => prev - 1 );
};
const nextSlide = () =>{
  setCurrentSlide (currentSlide === 3 ? 0 : (prev) => prev + 1 );

};

  return (
    <div className='slider'>
    <div className='container' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
<img src={data[0]} alt=""/>
<img src={data[1]} alt=""/>
<img src={data[2]} alt=""/>
<img src={data[3]} alt=""/>
    </div>
    <div className='icons'>
      <div className='icon' onClick={prevSlide}>
      <WestIcon />

      </div>

      <div className='icon' onClick={nextSlide}>
      <EastIcon />
     
      </div>
  
    </div>
    </div>
  )
}

export default Slider;

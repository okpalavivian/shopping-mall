import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss"
import {useState} from "react"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
const data = [
 ' https://i.postimg.cc/P5J6c7XS/girl-g3478c5353-640.jpg',
 ' https://i.postimg.cc/Z5QfhL04/girl-gd9d321d5d-640.jpg',
  "https://i.postimg.cc/XqhRbX8M/mother-g6f9c23460-640.jpg",
  'https://i.postimg.cc/CMDdCMbN/courtney-cook-ur-OLqivl-Yz8-unsplash.jpg',
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
<img src={data[0]} alt="" />
<img src={data[1]} alt="" />
<img src={data[2]} alt="" />
<img src={data[3]} alt="" />
    </div>
    <div className='icons'>
      <div className='icon' onClick={prevSlide}>
      <WestOutlinedIcon />

      </div>

      <div className='icon' onClick={nextSlide}>
      < EastOutlinedIcon />
     
      </div>
  
    </div>
    </div>
  )
}

export default Slider;

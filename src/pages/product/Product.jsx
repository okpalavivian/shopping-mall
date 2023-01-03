import React from "react";
import "./Product.scss"
import { useState } from "react";

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  
  const images =[
   "https://i.postimg.cc/nhgtfbx2/DSC-3915.jpg",
   "https://i.postimg.cc/zvwY1pvG/DSC-3990.jpg"
  ];

  return (
  <div className="product">
<div className="left">
<div className="images">
<img src={images [0]} alt="" onClick={e=>setSelectedImg(0)}/>
  <img src={images [1]} alt="" onClick={e=>setSelectedImg(1)}/>
</div>
<div className="mainImg">
  <img src={images [selectedImg]} alt="" />
</div>
</div>
<div className="right">
  <h1>Title</h1>
  <span>$18.8</span>
  <p>
  Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod tempor
   incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat
    </p>
    <div className="quantity">
      <button onClick={()=>setQuantity(prev=>prev-1)}>-</button>
      <button onClick={()=>setQuantity(prev=>prev-1)}>+</button>
    </div>
</div>

  </div>)
};
export default Product;

import React from "react";
import "./Product.scss"

const images =[
 " https://postimg.cc/0z7JCL5s",
 "https://i.postimg.cc/zvwY1pvG/DSC-3990.jpg"
];

const Product = () => {
  return <div className="product">
<div className="left">
  <img src={images [0]} alt="" onClick={e=>setSelectedImg(0)}/>
  <img src={images [1]} alt="" onClick={e=>setSelectedImg(1)}/>
</div>
<div className="mainImg">
  <img src={images[setSelectedImg]} alt="" />
</div>
<div className="right"></div>

  </div>;
};
export default Product;

import React from "react";
import "./Product.scss";
import { useState } from "react";
import AddShoppingCartOutlined from "@mui/icons-material/AddShoppingCartOutlined";
import BalanceOutlined from "@mui/icons-material/BalanceOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);

  const images = [
    "https://i.postimg.cc/nhgtfbx2/DSC-3915.jpg",
    "https://i.postimg.cc/zvwY1pvG/DSC-3990.jpg",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$18.8</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => prev - 1)}>-</button>
          <button onClick={() => setQuantity((prev) => prev - 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartOutlined />
          ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceOutlined />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span> Product type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
      </div>
    </div>
  );
};
export default Product;

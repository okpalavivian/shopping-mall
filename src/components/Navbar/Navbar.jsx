import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="img/flag.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="items">
            <span>USD</span>
          </div>
        </div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};
export default Navbar;

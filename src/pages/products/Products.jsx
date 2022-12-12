import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Lists from "../../components/lists/Lists";
import "./Products.scss"



const Products = () => {

  const catId = (useParams().id)
  const[maxPrice, setMaxPrice] = useState(1000)
const [sort, setSort] = useState(null)

  return <div className="products">
  <div className="left">
<div className="filterItem">

  <h2>Product Categories</h2>

  <div className="inputItem">
<input type="checkbox" id="1" value={1} />
<label htmlFor="1">Long Gowns</label>
  </div>

  
  <div className="inputItem">
<input type="checkbox" id="2" value={2} />
<label htmlFor="2">Coporates wears</label>
  </div>

  <div className="inputItem">
<input type="checkbox" id="3" value={3} />
<label htmlFor="3">Short Gowns</label>
  </div>
</div>
<div className="filterItem">

<h2>Filter by Price</h2>
<span>0</span>
<input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
<span>{maxPrice}</span>
</div>
<div className="filterItem">
  <h2>Sort by</h2>

  <div className="inputItem">
    <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")} />
    <label htmlFor="asc">Price (Lowest first) </label>
  </div>

  <div className="inputItem">
    <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")} />
    <label htmlFor="asc">Price (Highest first) </label>
  </div>
</div>


  </div>
  <div className="right">
<img className="catImg" src="https://i.postimg.cc/L8J7QTpd/woman-ga5fb91a9a-640.jpg" />

<Lists catId={catId} maxPrice={maxPrice} sort={sort} />
</div>
  </div>;
};
export default Products;

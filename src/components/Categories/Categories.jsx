import React from 'react'
import "./categories.scss";
import {Link} from "react-router-dom";


const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
      <div className='row'>
      <img src="https://i.postimg.cc/qvN5YTMn/60-Latest-Ankara-Styles-for-Women-2022-Claraito-s-Blog.jpg" alt="" />
  <button>
  <Link className="link" to="/products/1">Sale</Link>
  </button>
 
      </div>
      <div className='row'>  
       <img src="https://i.postimg.cc/XqhRbX8M/mother-g6f9c23460-640.jpg" alt="" />
  <button>
  <Link className="link" to="/products/2">Woman</Link>
  </button></div>
      </div>
      <div className='col'>
      <div className='row'>
      <img src="https://i.postimg.cc/XqhRbX8M/mother-g6f9c23460-640.jpg" alt="" />
  <button>
  <Link className="link" to="/products/3">Men</Link>
  </button>
      </div>
   
      </div>
      <div className='col col-l'>
      <div className='row'>
      <img src="https://i.postimg.cc/XqhRbX8M/mother-g6f9c23460-640.jpg" alt="" />
  <button>
  <Link className="link" to="/products/1">Children</Link>
  </button>
      <div className='col'>
      <div className='row'>
      <img src="https://i.postimg.cc/XqhRbX8M/mother-g6f9c23460-640.jpg" alt="" />
  <button>
  <Link className="link" to="/products/1">Children</Link>
  </button>
      </div>
      </div>
      <div className='col'>
      <div className='row'> 
        <img src="https://i.postimg.cc/XqhRbX8M/mother-g6f9c23460-640.jpg" alt="" />
  <button>
  <Link className="link" to="/products/1">Assesories</Link>
  </button></div>
    </div>
    </div>
    <div className="row">
    <img src="https://i.postimg.cc/XqhRbX8M/mother-g6f9c23460-640.jpg" alt="" />
  <button>
  <Link className="link" to="/products/1">Shoes</Link>
  </button>
    </div>
    </div>
    </div>
  )
}

export default Categories

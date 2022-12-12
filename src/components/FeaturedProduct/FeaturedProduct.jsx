import React from 'react'
import "./FeaturedProduct.scss"
import Card from "../../components/card/Card"

const FeaturedProduct=({type}) =>{

  const data =[
    {
      id: 1,
      img:"https://i.postimg.cc/7YqgFxPp/30-Latest-Ankara-Styles-For-Wedding-2021-2022-Claraito-s-Blog.jpg",
      img2: "https://i.postimg.cc/XqhRbX8M/mother-g6f9c23460-640.jpg",
      
      title: "shoe",
      isNew: true,
      oldPrice: 19,
      price: 12,

    },
    {
      id: 2,
      img:"https://i.postimg.cc/4Ny4KjZJ/Ankara-stylish-wears-for-women.jpg",
      img2: "",
      title: "shoe",
      isNew: true,
      oldPrice: 19,
      price: 12,

    },
    {
      id: 3,
      img:"https://i.postimg.cc/63xLqdvX/Beautiful-Ankara-dress.jpg",
      
      img2: "",
      title: "shoe",
      isNew: true,
      oldPrice: 19,
      price: 12,

    },
    {
      id: 4,
      img:"https://i.postimg.cc/fbrprqpv/Pinterest.jpg",
      img2: "",
      title: "shoe",
      isNew: true,
      oldPrice: 19,
      price: 12,

    }
  ]
  return (
    <div className='featuredProducts'>
       <div className='top'>
<h1>{type} products</h1>
<p>Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna
     aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip
       ex ea commodo consequat</p>
</div>

<div className='bottom'>
  {data.map(item=>(
    <Card item={item} key= {item.id}/>
  ))}
  
       </div>
     
      
    </div>
  )
}

export default FeaturedProduct

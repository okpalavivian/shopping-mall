import React from 'react'
import "./Lists.scss"
import Card from "../../components/card/Card"
const Lists = () => {
  

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
        img:"https://i.postimg.cc/j2ZzwJ19/Ankara-Styles-2022-25-Attractive-latest-Ankara-long-gown-styles-For-Cute-Ladies.jpg",
        img2: "",
        title: "shoe",
        isNew: true,
        oldPrice: 19,
        price: 12,
  
      },
      {
        id: 3,
        img:"https://i.postimg.cc/XqhRbX8M/mother-g6f9c23460-640.jpg",
        
        img2: "",
        title: "shoe",
        isNew: true,
        oldPrice: 19,
        price: 12,
  
      },
      {
        id: 4,
        img:"https://i.postimg.cc/7YqgFxPp/30-Latest-Ankara-Styles-For-Wedding-2021-2022-Claraito-s-Blog.jpg",
        img2: "",
        title: "shoe",
        isNew: true,
        oldPrice: 19,
        price: 12,
  
      },
      {
        id: 5,
        img:"https://i.postimg.cc/7YqgFxPp/30-Latest-Ankara-Styles-For-Wedding-2021-2022-Claraito-s-Blog.jpg",
        img2: "",
        title: "shoe",
        isNew: true,
        oldPrice: 19,
        price: 12,
  
      },
      {
        id: 6,
        img:"https://i.postimg.cc/7YqgFxPp/30-Latest-Ankara-Styles-For-Wedding-2021-2022-Claraito-s-Blog.jpg",
        img2: "",
        title: "shoe",
        isNew: true,
        oldPrice: 19,
        price: 12,
  
      },
      {
        id: 7,
        img:"https://i.postimg.cc/7YqgFxPp/30-Latest-Ankara-Styles-For-Wedding-2021-2022-Claraito-s-Blog.jpg",
        img2: "",
        title: "shoe",
        isNew: true,
        oldPrice: 19,
        price: 12,
  
      },
      {
        id: 8,
        img:"https://i.postimg.cc/7YqgFxPp/30-Latest-Ankara-Styles-For-Wedding-2021-2022-Claraito-s-Blog.jpg",
        img2: "",
        title: "shoe",
        isNew: true,
        oldPrice: 19,
        price: 12,
  
      }
    ]
    return (
      <div className='lists'>  {data.map(item=>(
        <Card item={item} key= {item.id}/>
      ))}
      
         </div>
    )
  }
  

  
export default Lists

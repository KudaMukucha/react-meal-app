import React, { useEffect } from 'react'
import { useState } from 'react'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
import { Link } from 'react-router-dom';


export default function Veggie() {
  const [veggie,setVeggie] = useState([])
    const getVeggie = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`)
        const data = await api.json()
        setVeggie(data.meals.slice(0,10))
        // console.log(data.meals.slice(0,10))

    }

    useEffect(() => {
       getVeggie()
    }, [])
  return (
    <div className='wrapper'>
      <h3>Our Vegetarian Picks</h3>
      <Splide options={{
        perPage:3,
        gap:'2rem',
        pagination:false,
        drag:'free'
      }}>
      {
        veggie.map((item)=>{
          return(
            <SplideSlide key={item.idMeal}>
          <div className="card" >
            <Link to={'/meal/'+item.idMeal}>
            <p>{item.strMeal}</p>
            <img src={item.strMealThumb} alt="beef meal image" />
            <div className='gradient'></div>
            </Link>
          </div>
          </SplideSlide>
          )
        })
      }
      </Splide>
    </div>
  )
}

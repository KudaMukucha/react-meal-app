import React, { useEffect } from 'react'
import { useState } from 'react'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
import { Link } from 'react-router-dom';


export default function Beef() {
  const [beef,setBeef] = useState([])
    const getBeef = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
        const data = await api.json()
        setBeef(data.meals.slice(0,10))
        // console.log(data.meals.slice(0,10))

    }

    useEffect(() => {
       getBeef()
    }, [])
  return (
    <div className='wrapper'>
      <h3>Our Beef Picks</h3>
      <Splide options={{
        perPage:4,
        gap:'2rem',
        pagination:false,
        drag:'free'
      }}>
      {
        beef.map((item)=>{
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

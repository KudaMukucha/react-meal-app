import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {motion} from 'framer-motion'


export default function Meals() {
    const [meals,setMeals] = useState([])
    let params = useParams()
    const getMeals =async(name)=>{
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        const meals = await data.json()
        setMeals(meals.meals)
        console.log(meals)

    }
    useEffect(() => {
       getMeals(params.type)
    // console.log(params.type);
    }, [params.type])
  return (
    <motion.div className='grid' animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}>
        {
            meals.map((meal)=>{
                return(
                    <div className="card" key={meal.idMeal}>
                        <Link to={'/meal/'+meal.idMeal}>
                    <p>{meal.strMeal}</p>
                    <img src={meal.strMealThumb} alt='meal image' />
                    <div className='gradient'></div>
                    </Link>
                </div>
                )
            })
        }
    </motion.div>
  )
}

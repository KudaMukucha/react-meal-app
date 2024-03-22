import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Searched() {
    const [searchedMeals,setSearchedMeals] = useState([])
    let params = useParams()
    const getSearched =async(name)=>{
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        const meals = await data.json()
        setSearchedMeals(meals.meals)
        console.log(meals)

    }
    useEffect(() => {
       getSearched(params.search)
    }, [params.search])
  return (
    <div className='grid'>
        {
            searchedMeals.map((result)=>{
                return(
                    <div className="card" key={result.idMeal}>
                        <Link to={'/meal/'+result.idMeal}>
                        <p>{result.strMeal}</p>
                    <img src={result.strMealThumb} alt='meal image' />
                    <div className='gradient'></div>
                    </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

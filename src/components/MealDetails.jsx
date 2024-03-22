import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function MealDetails() {
    let params = useParams()
    const [details,setDetails] = useState({})
    const [activeTab,setActiveTab] = useState('instructions')
    const fetchDetails =async()=>{
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.name}`)
        const detailsData = await data.json()
        setDetails(detailsData.meals)
        console.log(details);
    }
    useEffect(() => {
        fetchDetails()
    }, [params.name])
  return (
   <div className="details-wrapper">
    <div>
         {details && details.length > 0 && <h2>{details[0].strMeal}</h2>}
         {/* <img src={details[0].strMealThumb} alt="img" /> */}
         {details && details.length > 0 && <img src={details[0].strMealThumb} alt="img" />}
    </div>
    <div className="info">
        <button onClick={()=> setActiveTab('instructions')} className={activeTab === 'instructions' ? 'active': ''}>Instructions</button>
        <button onClick={()=> setActiveTab('ingredients')} className={activeTab === 'ingredients' ? 'active': ''}>Ingredients</button>

        {activeTab === 'instructions' ? (
              <div className="summary">
              {/* <p>{details[0].strInstructions}</p> */}
              {/* {details && details.length > 0 && <h2>{details[0].strInstructions}</h2>} */}
              {details && details.length > 0 ? (
               <p dangerouslySetInnerHTML={{__html:details[0].strInstructions}}></p>
             ) : (
               <p>No instructions available.</p>
             )}
            
            {details && details.length > 0 ? (
               <ul>
                   <li>{details[0].strIngredient1}</li>
                   <li>{details[0].strIngredient2}</li>
                   <li>{details[0].strIngredient3}</li>
               </ul>
             ) : (
               <p>No ingredients available.</p>
             )}
           </div>
        ):
        (
            <div className="summary">
         
          {details && details.length > 0 ? (
             <ul>
                 <li>{details[0].strIngredient1}</li>
                 <li>{details[0].strIngredient2}</li>
                 <li>{details[0].strIngredient3}</li>
             </ul>
           ) : (
             <p>No ingredients available.</p>
           )}
         </div>
        )
        }
      
    </div>
   </div>
    
  )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

const AreaDetails = () => {
const {country}=useParams()

const [dataCountry, setdataCountry] = useState([])
const [isLoading, setisLoading] = useState(true)

async function countryMeals(country) {
    let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    setdataCountry(data.meals)
    setisLoading(false)
}

useEffect(() => {
  countryMeals(country)
}, [country])

  return (
    <>
   <Helmet>
        <title>Meals || {country}</title>
    </Helmet>

{isLoading?<div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
  <i className="fa-solid fa-utensils fa-4x fa-bounce text-main"></i></div>
  :<>
  
    <div className='row g-3 py-5'>
     {dataCountry.length>0 ?
     dataCountry.map((country,indecountry)=><Link to={`/detailsmeal/${country.idMeal}`} key={indecountry}  className='text-decoration-none col-6 col-md-3 col-lg-2 '>

      
      <div className='parentHover  rounded-3 position-relative overflow-hidden'>
      <img src={country.strMealThumb} alt={country.strMeal} className='img-fluid' />

      <div className='mealHover position-absolute h-100 w-100  d-flex justify-content-center align-items-center'>
      <p className='text-white m-0'>{country.strMeal}</p> 

      </div>
     
    </div>




     
     </Link>)
     
     
     :''}
    </div>
  
  </>}
  
    
    
    </>
  )
}

export default AreaDetails
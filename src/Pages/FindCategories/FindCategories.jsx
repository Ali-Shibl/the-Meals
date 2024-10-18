import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import {Helmet} from "react-helmet";

const FindCategories = () => {
  let {category}=useParams()
  const [dataCategory, setdataCategory] = useState([])
  const [isLoading, setisLoading] = useState(true)

async function getDataCategory(category) {
 const {data} =await axios.get(` https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
 setdataCategory(data.meals)
 setisLoading(false)
}

useEffect(() => {
  getDataCategory(category)
}, [category])

  return (
  <>
<Helmet>
    <meta charSet="utf-8" />
    <title>meals || {category}</title>
</Helmet>

  <div className='row g-3 py-5'>
    
      
{isLoading?<div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
  <i className="fa-solid fa-utensils fa-4x fa-bounce text-main"></i></div>


:
dataCategory.map((category,index)=><Link key={index} to={`/detailsmeal/${category.idMeal}`} className='text-decoration-none col-6 col-md-3 col-lg-2'>
     
      <div className='parentHover  rounded-3 position-relative overflow-hidden'>
      <img src={category.strMealThumb} alt={category.strMeal} className='img-fluid' />

      <div className='mealHover position-absolute h-100 w-100  d-flex justify-content-center align-items-center'>
       <p className='text-white m-0'>{category.strMeal}</p>

      </div>
     
    </div>

    


</Link>)}




  </div>
  </>
  )
}

export default FindCategories
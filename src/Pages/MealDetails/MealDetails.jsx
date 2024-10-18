import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import style from './Meal.module.css'
import {Helmet} from "react-helmet";

const MealDetails = () => {

const {idMeal}=useParams()
const [dataMeal, setdataMeal] = useState({})
const [isLoading, setisLoading] = useState(true)

async function getDetailsMeal(id) {
const {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
setdataMeal(data.meals[0])
setisLoading(false)
}

useEffect(() => {
getDetailsMeal(idMeal)
}, [idMeal])


  return (
    <>
<Helmet>
    <meta charSet="utf-8" />
    <title>{dataMeal.strMeal}</title>
</Helmet>


    {isLoading?<div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
  <i className="fa-solid fa-utensils fa-4x fa-bounce text-main"></i></div>


:
    
    <div className='row g-3 pt-4 pb-5 py-md-5'>

           <div className='col-md-4 text-center'>
            <img src={dataMeal.strMealThumb} alt={dataMeal.strMeal} className={style.img} />
        
           </div>
           <div className='col-md-8 text-center text-md-start'>
           <p><span className={style.span}>nameMeal :</span> {dataMeal.strMeal}</p>
           <p className='d-none d-lg-block'><span className={style.span}>Category :</span> {dataMeal.strCategory}</p>
           <p className='d-none d-lg-block'><span className={style.span}> Country :</span> {dataMeal.strArea}</p>
           <p className={style.text_justify}><span className={style.span}> Instructions :</span> {dataMeal.strInstructions} </p>


            <Link to={dataMeal.strYoutube}  target='_blank' className='btn btn-danger me-2 text-white'>youtube</Link>
            <Link to={dataMeal.strSource} target='_blank' className='btn btn-success text-white'>Source</Link>

           </div>

    </div>

}




    
    
    </>
  )
}

export default MealDetails
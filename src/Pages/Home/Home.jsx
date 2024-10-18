import axios  from 'axios'
import React, { useState } from 'react'
import  { useQuery } from 'react-query'
import Categories from '../Categories/Categories'
import Area from '../Area/Area'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
import style from './Home.module.css'

const Home = () => {
const [dataSearch, setdataSearch] = useState([])
function getMostMeals() {
 return axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=') 
}
let {data ,isLoading }=useQuery('Meals',getMostMeals)

async function searchMeal(e) {
  let term=e.target.value
const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
  console.log(data.meals);
  if (data.meals != null) {
    setdataSearch(data.meals)
  }
}  
  
  return (
<>    
  

{isLoading?<div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
  <i className="fa-solid fa-utensils fa-4x fa-bounce text-main"></i></div>
  :
<>


<div className={style.search}>
    <input type="text" className={style.search__input}  placeholder="Search.." onChange={searchMeal}/>
    <button className={style.search__button} id="se" aria-label="iconSearch">
        <svg className={style.search__icon} aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
    </button>
</div>
<div className="row g-3 py-4 py-md-5">
  {dataSearch.length>0 ?<>
    {dataSearch.map((meal,index)=><Link rel="preload" to={`/detailsmeal/${meal.idMeal}`} key={index} className='text-decoration-none col-6 col-sm-4 col-md-3 col-lg-2 '>
  
  <div className='parentHover  rounded-3 position-relative overflow-hidden'>
    <img src={meal.strMealThumb} alt={meal.strMeal}  className='img-fluid'/>
    <div className='mealHover position-absolute h-100 w-100  d-flex justify-content-center align-items-center'>
     <p className='text-white m-0'>{meal.strMeal}</p>
    </div>
   
  </div>

</Link>)}
  </>:<>
  
  {data?.data.meals.map((meal,index)=><Link rel="preload" to={`/detailsmeal/${meal.idMeal}`} key={index} className='text-decoration-none col-6 col-sm-4 col-md-3 col-lg-2 '>
  
    <div className='parentHover  rounded-3 position-relative overflow-hidden'>
      <img src={meal.strMealThumb} alt={meal.strMeal}  className='img-fluid'/>
      <div className='mealHover position-absolute h-100 w-100  d-flex justify-content-center align-items-center'>
       <p className='text-white m-0'>{meal.strMeal}</p>
      </div>
     
    </div>

  </Link>)}
  </>}




</div>
<h4 className='text-center mt-4 '>Types of meals</h4>
<Categories/>
<h4 className='text-center mt-3 '>Countries meals</h4>
<Area/>
<Helmet>
    <meta charSet="utf-8" />
    <title>Home</title>
</Helmet>
</>
}

  </>
   
   
   
   
   
  )
}

export default Home
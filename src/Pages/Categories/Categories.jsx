import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import style from './Categories.module.css'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";

const Categories = () => {

    function getAllCategories() {
        return axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    }
    
const {data , isLoading}=useQuery('categories',getAllCategories)
// console.log(data?.data.categories);
  return (
    <>

<Helmet>
    <meta charSet="utf-8" />
    <title>Categories</title>
</Helmet>


{isLoading?<div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
  <i className="fa-solid fa-utensils fa-4x fa-bounce text-main"></i></div>
  :<>

    <div className="row g-2 pt-4 pb-5">

    {
        data?.data.categories.map((cat,index)=><Link rel="preload" to={`/findcategory/${cat.strCategory}`} key={index} className={`col-6 col-sm-4 col-md-3 col-lg-2 text-decoration-none ${style.cat}`}>
           <div className='text-center'>
            <img src={cat.strCategoryThumb} alt={cat.strCategory}  className={`${style.imageCat} ${style.img_cat} rounded-circle`}/>
            <p className='m-0 mt-2'>{cat.strCategory}</p>

           </div>

        </Link>)
    }
    
    
    </div>
    </>}
    </>
  )
}

export default Categories
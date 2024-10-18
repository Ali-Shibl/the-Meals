import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Darkmood from '../Darkmood/Darkmood';
import BackToTop from '../BackToTop/BackToTop';
const Layout = () => {
 const [showBtnTop, setshowBtnTop] = useState(false)
 
  document.addEventListener('scroll',()=>{
    document.documentElement.scrollTop > 500? setshowBtnTop(true):setshowBtnTop(false)
  })
  

  return (
    <>
    

  <div id="outer-container">
    <Navbar/>
  <main id="page-wrap">
  <div className="container">
     <Outlet></Outlet>
    </div>
  </main>
</div>
 
<Darkmood/>

{showBtnTop?<BackToTop/>:''}

 


      





    </>

  )
}

export default Layout
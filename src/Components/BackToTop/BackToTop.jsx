import React from 'react'
import style from './BackToTop.module.css'
const BackToTop = () => {
  function backToTop(){
    document.documentElement.scrollTop=0
  }
  return (
    <>
    <button className={style.top} onClick={backToTop}>
    <i className="fa-solid fa-arrow-up"></i>
</button>
    
    </>
  )
}

export default BackToTop
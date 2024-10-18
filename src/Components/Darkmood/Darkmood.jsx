import React, { useEffect, useState } from 'react'
import style from './Darkmood.module.css'

const Darkmood = () => {

    const [dark_light, setdark_light] = useState(getStorageMood())


    function getStorageMood() {
        let mood =''
        if (localStorage.getItem('mood') != null) {
          mood = localStorage.getItem('mood')
        } 
        return mood
      }

    function toggleMood() {
  
      dark_light === 'light' ? setdark_light('dark') : setdark_light('light')
  
    }
  
    useEffect(() => {
      document.querySelector('body').setAttribute('mood', dark_light)
      localStorage.setItem('mood', dark_light)
    }, [dark_light])



  return (
   <>
   <div className={`${style.btn_mood}  cursor-pointer  rounded-circle`} onClick={toggleMood} >{dark_light === 'dark'? <>
   <i className="fa-regular fa-sun"></i>
   </>
   :
   <>
<i className="fa-solid fa-moon"></i>

   </>}</div>
   
   </>
  )
}

export default Darkmood
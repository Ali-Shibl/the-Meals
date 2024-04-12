import React, { useState } from 'react'
import {push as Menu } from 'react-burger-menu';
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';
const Navbar = () => {
    
const [show, setshow] = useState(false)
    document.addEventListener('scroll',()=>{
        document.documentElement.scrollTop > 500? setshow(true):setshow(false)
    })



    return (
        <>

            <nav className={    `navbar ${show?'fixed-top bg-nav':''}` }>
                <div className="container">
                    <div className='w-100 d-flex justify-content-between align-items-center'>

                        <Link to={'/'} aria-label="logoPage">  <img src={logo} alt="logo" className='logo rounded-circle' /></Link>

                        {/* lab */}
                      
                          

                        <ul className="list-unstyled d-none d-lg-flex column-gap-3 m-0 m-auto">
                            <li className="nav-item">
                                <Link className='nav-link '  to={'/'}>Home</Link>
                            </li>
                            <li className='nav-item'>
                                 <Link className='nav-link '  to={'/categories'}>Categories</Link>
                            </li>
                            <li className="nav-item">
                             <Link className='nav-link '  to={'/area'}>Country</Link>
                            </li>

                        </ul>
                      

                        {/* mobile */}

                        <div className='d-block d-lg-none'>
                            <Menu right={true}  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
                                <ul className='list-unstyled'>
                                 <li className='nav-item mb-2'>
                                 <Link className="nav-link"  to={'/'}>Home</Link>
                                 </li>
                                 <li className='nav-item mb-2'>
                                 <Link className="nav-link"  to={'/categories'}>Categories</Link>
                                 </li>
                                 <li className="nav-item">
                                  <Link className="nav-link"  to={'/area'}>Country</Link>
                                </li>
                                </ul>

                            </Menu>
                        </div>


                    </div>
                </div>


            </nav>


        </>
    )
}

export default Navbar
import React, { useState } from 'react'
import HeaderCss from '../../Css/Header.css'
import SearchImage from '../../Images/Common/search.png'
import Hamberger from "../../Images/Common/NavBar.webp"
import { NavLink } from "react-router-dom";
function Header() {
    const[value,setValue]=useState(true)
    const ToggleHamburger=()=>{
        setValue(!value)
    }
  return (
    <div className='HeaderTopDiv'>
        <div onClick={ToggleHamburger} className='HambergerMenu'>
            <img id="HambergerImage"src={Hamberger} alt="error"/>
        </div>
        <div className='linkTab'>
            {
             value?
            <ul className='linkUl'>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    About
                </li>
                <li>
                <NavLink to="/service">Our Service</NavLink>
                </li>
                <li>
                    Our Product
                </li>
                <li>
                    <NavLink to="/galleryPhoto">Gallery</NavLink>
                </li>
                <li>
                   <NavLink to="/blog">Blogs</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contacts</NavLink>
                </li>
            </ul>:""
            }
        </div>

        <div className='searchDiv'>
            <div>
                <img id="searchimage" src={SearchImage} alt="error"/>
            </div>

            <div className='loginDiv'>
                <p id="loginTextOnly">Login</p>
            </div>
        </div>

    </div>
  )
}

export default Header
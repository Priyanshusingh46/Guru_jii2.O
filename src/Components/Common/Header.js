import React from 'react'
import HeaderCss from '../../Css/Header.css'
import SearchImage from '../../Images/Common/search.png'
function Header() {
  return (
    <div className='HeaderTopDiv'>
        <div className='linkTab'>
            <ul className='linkUl'>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Our Service
                </li>
                <li>
                    Our Product
                </li>
                <li>
                    Gallery
                </li>
                <li>
                    Blogs
                </li>
                <li>
                    Contacts
                </li>
            </ul>
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
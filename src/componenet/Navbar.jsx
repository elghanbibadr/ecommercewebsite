import React from 'react'
import menuHamburger from "../assets/bars-solid.svg"
import searchIcon from "../assets/searchIcon.svg"
import heartIcon from "../assets/heart.svg"
import logo from "../assets/logo.svg"
import bagShopping from "../assets/bag-shopping.svg";


const Navbar = () => {

  return (
    <header className='p-4'>
        <nav className='flex justify-between items-center'>
            <div className='flex items-center'>
                <img className='h-5 mx-3 w-6' src={menuHamburger} alt="menu hamburger icon" />
                 <img className='h-4' src={searchIcon} alt="search icon" />
            </div>
        <img src={logo} alt="store logo" /> 
         <div className='flex  items-center'>
         <img className=' h-4 w-4' src={heartIcon} alt="heart icon" />
         <img className='ml-2 px-4'  src={bagShopping} alt="bag shopping icon" />
         </div>
        </nav>

    </header>
  )
}

export default Navbar
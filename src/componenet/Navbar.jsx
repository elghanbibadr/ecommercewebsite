import React from 'react'
import menuHamburger from "../assets/bars-solid.svg"
import searchIcon from "../assets/searchIcon.svg"
import heartIcon from "../assets/heart.svg"
import logo from "../assets/logo.svg"
import bagShopping from "../assets/bag-shopping.svg";


const Navbar = () => {

  return (
    <header className='p-4 border-b-[#ccc] pb-4 border-b-[1px]'>
        <nav className='flex  justify-between items-center'>
            <div className='flex items-center'>
                <img className='h-5 mx-3 lg:hidden w-6' src={menuHamburger} alt="menu hamburger icon" />
                 <img className='h-4 lg:hidden' src={searchIcon} alt="search icon" />
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
import React from 'react'
import menuHamburger from "../assets/bars-solid.svg"
import searchIcon from "../assets/searchIcon.svg"
import heartIcon from "../assets/heart.svg"
import logo from "../assets/logo.svg"
import bagShopping from "../assets/bag-shopping.svg";


const Navbar = () => {

  return (
    <header className='p-4 border-b-[#ccc] pb-4 border-b-[1px] lg:px-10'>
        <nav className='flex  justify-between items-center'>
            <div className='flex items-center lg:hidden'>
                <img className='h-5 mx-3 lg:hidden w-6' src={menuHamburger} alt="menu hamburger icon" />
                 <img className='h-4 lg:hidden' src={searchIcon} alt="search icon" />
            </div>
        <img src={logo} alt="store logo" />  
         <div className='flex items-center'>  
         <img className='  w-4 h-4 lg:h-5 lg:w-5' src={heartIcon} alt="heart icon" />
         <img className=' hidden h-5 ml-2 lg:block lg:mx-5' src={searchIcon} alt="search icon" />
         <img className='ml-2 h-5 lg:h-6'  src={bagShopping} alt="bag shopping icon" />
         </div>
        </nav>

    </header>
  )
}

export default Navbar
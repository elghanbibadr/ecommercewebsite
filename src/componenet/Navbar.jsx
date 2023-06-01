import React from 'react'
import menuHamburger from "../assets/bars-solid.svg"
import searchIcon from "../assets/searchIcon.svg"
import heartIcon from "../assets/heart.svg"
import logo from "../assets/logo.svg"
import profilIcon from "../assets/user-regular.svg"
import bagShopping from "../assets/bag-shopping.svg";


const Navbar = () => {

  return (
    <header className='p-6  border-b-[#ccc] pb-4 border-b-[1px] lg:px-20'>
        <nav className='flex  justify-between items-center'>
            <div className='flex items-center lg:hidden' >
                <img className='h-5 mx-3 lg:hidden w-6' src={menuHamburger} alt="menu hamburger icon" />
                 <img className='h-4 lg:hidden' src={searchIcon} alt="search icon" />
            </div>
        <img src={logo} alt="store logo" />  
        {/* dropdown menu  */}
        <ul className=' hidden  lg:flex uppercase ml-40 font-semibold  items-center '>
         <li>women</li>
         <li className='mx-5'>men</li>
         <li>accessories</li>
        </ul>
         <div className='flex items-center'>  
         <img className=' hidden h-5 ml-2 lg:block lg:mx-6' src={searchIcon} alt="search icon" />
         <img className='  w-4 h-4 lg:h-5 lg:w-5' src={heartIcon} alt="heart icon" />
         <img className='hidden lg:h-5 lg:w-5 lg:block lg:mx-6' src={profilIcon} alt="profil icon" />
         <img className='ml-2 h-5 lg:h-6'  src={bagShopping} alt="bag shopping icon" />
         </div>
        </nav>

    </header>
  )
}

export default Navbar
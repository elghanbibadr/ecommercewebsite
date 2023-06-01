import React from 'react'
import menuHamburger from "../assets/bars-solid.svg"
import searchIcon from "../assets/searchIcon.svg"

const Navbar = () => {
  return (
    <header className='p-4'>
        <nav className='flex justify-between'>
            <div className='flex h-6 w-6 items-center'>
                <img className='h-6 mx-2 w-6' src={menuHamburger} alt="menu hamburger icon" />
                 <img src={searchIcon} alt="search icon" />
            </div>
        <img src="https://cdn.gymshark.com/images/branding/gs-icon-black.svg" alt="store logo" /> 
        </nav>
    </header>
  )
}

export default Navbar
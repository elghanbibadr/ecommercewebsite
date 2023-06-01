import React from 'react'

const Btn = (props) => {  
  return (
    <button className={`uppercase px-6 py-2 text-sm lg:text-md rounded-full font-semibold  ${props.className}`}>shop new releases</button>
  )     
}

export default Btn
import React from 'react'

const Btn = (props) => {  
  return (
    <button className={`uppercase px-6 py-3 text-sm lg:text-md rounded-full font-semibold  ${props.className}`}>{props.text}</button>
  )     
}

export default Btn
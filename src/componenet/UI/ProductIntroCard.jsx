import React, { useState } from 'react'
import womenImg from "../../assets/product.webp"
import heartIcon from "../../assets/heart.svg";
import addtobasket from "../../assets/addToBasket.svg"

const ProductIntroCard = () => {
    const [productHovered ,setProductHovered]=useState(false)
     
    const availableSizes=["xs","s","md","l","xl","xxl"];


    const handleProuctGotHovered=()=>{
        //show the available sizes for this  product
    }
  return (
    <>
    <div>
    {availableSizes.map((size,index) => {
        return <div className='bg-white hover:bg-black' key={index} >
         <p className='text-[#6e6e6e]'>{size}</p> 
        </div>
    })}  
    </div>
    <div onMouseOver ={handleProuctGotHovered} className='relative w-[400px] m-4'>
      <div className='bg-white p-2 rounded-full absolute left-[90%] top-3 '>
        <img className='w-4 h-4 lg:h-4 lg:w-4' src={heartIcon} alt="heart icon" />
        </div>  
      <div className='bg-white p-2 rounded-full absolute left-[5%] top-3 '>
        <img className='w-4 h-4 lg:h-3 lg:w-3' src={addtobasket} alt="add to basket icon" />
        </div>    
        <div className='bg-white rounded-sm p-1 absolute left-2 top-[78%]'>
            <p className='font-semibold text-xs'>NEW</p>
        </div>
        <img className='' src={womenImg} alt="a guy modeling the product" />
       <h4 className='mt-3 text-md '>Legacy Washed Crop Top</h4> 
       <span className='text-[#6e6e6e] my-1 inline-block '> Black</span>
        <h6 className='font-bold'> $30</h6>
    </div>
    
    </>
  ) 
}

export default ProductIntroCard   
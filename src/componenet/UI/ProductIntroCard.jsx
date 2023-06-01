import React from 'react'
import womenImg from "../../assets/product.webp"
import heartIcon from "../../assets/heart.svg";
const ProductIntroCard = () => {
  return (
    // create an img html element that hold the product image and add a displayed absolute new text if the item is new and a heart to add to wishlist
    <div  className='relative w-[400px]'>
      <div className='bg-white p-2 rounded-full absolute left-[90%] top-3 '>
        <img className='w-4 h-4 lg:h-4 lg:w-4' src={heartIcon} alt="heart icon" />
        </div>  
        <div className='bg-white rounded-sm p-1 absolute left-2 top-[78%]'>
            <p className='font-semibold text-xs'>NEW</p>
        </div>
        <img className='' src={womenImg} alt="a guy modeling the product" />
       <h4 className='mt-3'>Legacy Washed Crop Top</h4> 
       <span className='text-[#6e6e6e] my-1 inline-block '>Black</span>
        <h6 className='font-bold'> $30</h6>
    </div>
  )
}

export default ProductIntroCard
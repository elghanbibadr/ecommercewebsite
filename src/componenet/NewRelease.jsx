import React from 'react'
import { newRealase } from "../Data"
import ProductIntroCard from './UI/ProductIntroCard'
export const NewRelease = () => {
    // mapping trough the new release data and render a card componenet from it that shows the product detail
    console.log(newRealase)
    return ( 
        <>
            <p className='text-[#6e6e6e] text-lg mt-10'>    WOMENS      </p>
            <h1 className='font-semibold text-3xl'>NEW RELEASES </h1>

            <div className="grid grid-rows-1 grid-cols-4">

                {newRealase.map(({ id, title, price,productImg, isNew, colors }) => {
                    return <ProductIntroCard key={id} isNew={isNew} productImg={productImg} colors={colors} price={price} title={title} />
                })}
    
            </div>
        </>
    )
}

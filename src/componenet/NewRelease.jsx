import React from 'react'
import { newRealase } from "../Data"
import ProductIntroCard from './UI/ProductIntroCard'
export const NewRelease = () => {
    // mapping trough the new release data and render a card componenet from it that shows the product detail
    console.log(newRealase)
    return ( 
        <div className='p-6'>
            <div className='flex justify-between '>
                <div>
                    <p className='text-[#6e6e6e] text-lg mt-10'>    WOMENS      </p>
                    <h1 className='font-semibold text-3xl'>NEW RELEASES </h1>
                </div>
                <div className='self-end'>
                    <a className='text-black font-bold underline' href="">View all</a>
                </div>
            </div>

            <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-4">

                {newRealase.map(({ id, title, price,productImg, isNew, colors }) => {
                    return <ProductIntroCard key={id} isNew={isNew} productImg={productImg} colors={colors} price={price} title={title} />
                })}
    
            </div>
        </div>
    )
}

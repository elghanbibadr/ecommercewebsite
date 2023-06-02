import React from 'react'
import { restDay } from '../Data'
import ProductIntroCard from './UI/ProductIntroCard'
const RestDay = () => {
    return (
        
        <>
            <h1 className='font-semibold p-6 mt-10 text-3xl'>REST DAY </h1>
            <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-4" >
                {restDay.map(({ id, title, productImg, color, isNew, price }) => {
                    return <ProductIntroCard key={id} isNew={isNew} title={title} colors={color} productImg={productImg} price={price} />
                })}
            </div>
        </>
    )
}

export default RestDay
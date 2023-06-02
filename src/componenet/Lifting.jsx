import React from 'react'
import { lifting } from '../Data'
import ProductIntroCard from './UI/ProductIntroCard'

const Lifting = () => {
    return (
        <div className='p-6'>
               <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-semibold mt-16 text-3xl'>LIFTING  </h1>                </div>
                <div className='self-end'>
                    <a className='text-black font-bold underline' href="">View all</a>
                </div>
            </div>   

            <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-4" >
                {lifting.map(({ id, title, productImg, color, isNew, price }) => {
                    return <ProductIntroCard key={id} isNew={isNew} title={title} colors={color} productImg={productImg} price={price} />
                })}
            </div>
        </div>
    )
}

export default Lifting
import React from 'react'
import { lifting } from '../Data'
import ProductIntroCard from './UI/ProductIntroCard'
const Lifting = () => {
  return (

    <>
    <h1 className='font-semibold p-6 mt-10 text-3xl'>LIFTING </h1>

    <div  className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-4" >
     {lifting.map(({id,title,productImg,color, price})=>{
        return  <ProductIntroCard key={id} title={title} colors={color} productImg={productImg} price={price} />
     })}
    </div>
    </>
  ) 
}

export default Lifting
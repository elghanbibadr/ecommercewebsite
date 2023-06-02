import React from 'react'
import {newRealase} from "../Data"
import ProductIntroCard from './UI/ProductIntroCard'
export const NewRelease = () => {
    // mapping trough the new release data and render a card componenet from it that shows the product detail
    console.log(newRealase)
  return (
    <div className="grid grid-rows-1 grid-cols-4">

        {newRealase.map(({id,title,price,isNew,colors})=>{
         return <ProductIntroCard key={id} isNew={isNew} colors={colors} price={price} title={title}/>
        })}

    </div>
  )
}

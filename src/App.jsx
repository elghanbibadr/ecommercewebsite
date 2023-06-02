import React from 'react'
import Navbar from './componenet/Navbar'
import Hero from './componenet/Hero'
import { NewRelease } from './componenet/NewRelease'
import ProductIntroCard from './componenet/UI/ProductIntroCard'
const App = () => {
  return (

    <div>
    <Navbar/>
     <Hero />
     <NewRelease />     
    </div>
  )
}

export default App  
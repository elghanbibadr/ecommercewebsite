import React from 'react'
import Navbar from './componenet/Navbar'
import Hero from './componenet/Hero'
import { NewRelease } from './componenet/NewRelease'
import PurcePerformanceIntro from './componenet/PurcePerformanceIntro'
import ProductIntroCard from './componenet/UI/ProductIntroCard'
import RestDayIntro from './componenet/RestDayIntro'
import Lifting from './componenet/Lifting'
const App = () => {
  return (

    <div>
    <Navbar/>
     <Hero />
     <NewRelease />     
     <PurcePerformanceIntro/>
     <Lifting />
     <RestDayIntro />
    </div>                      
  )
}

export default App  
import React from 'react'
import Navbar from './componenet/Navbar'
import Hero from './componenet/Hero'
import { NewRelease } from './componenet/NewRelease'
import PurcePerformanceIntro from './componenet/PurcePerformanceIntro'
import RestDayIntro from './componenet/RestDayIntro'
import Lifting from './componenet/Lifting'
import FindTheOne from './componenet/FindTheOne'
import RestDay from './componenet/RestDay'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewRelease />
      <PurcePerformanceIntro />
      <Lifting />
      <RestDayIntro />
      <RestDay />
      <FindTheOne />
    </div>
  )
}
   
export default App



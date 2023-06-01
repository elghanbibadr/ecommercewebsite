import React from 'react'
import Navbar from './componenet/Navbar'
import Btn from './componenet/UI/Btn'
const App = () => {
  return (

    <div className='bg-slate-950'>
    <Navbar/>
    <Btn className="bg-white text-black" text="shop new releases" />
    <Btn className="bg-[#53565a] text-white" text="shop 315" />
    </div>
  )
}

export default App  
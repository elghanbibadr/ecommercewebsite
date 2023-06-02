import React from 'react'
import Btn from './UI/Btn'
const PurcePerformanceIntro = () => {
    return (
        <>
        <div className='purePerformance1'>
            <div className=" p-4 lg:p-10 text-white relative top-60 ">
                <h2 className=' text-2xl lg:text-4xl uppercase font-medium'>Full Focus.Pure performance</h2>
                <p className='my-3  text-sm lg:text-md font-medium'>Go 9 for 9 at your next meet with our very first IPF approved singlet. LFG.</p>
                <div className='flex items-center w-full relative right-2'>
                    <Btn className="bg-white mx-2 w-full sm:w-auto text-black" text="shop new releases" />
                    <Btn className="bg-[#53565a] hidden lg:block text-white" text="shop 315" />
                </div>
            </div>
        </div>
        <div className='purePerformance2'>
            <div className=" p-4 lg:p-10 text-white relative top-60 ">
                <h2 className=' text-2xl lg:text-4xl uppercase font-medium'>YOU’VE PUT IN THE WORK.
NOW SHOW OFF THE RESULTS</h2>
                <p className='my-3  text-sm lg:text-md font-medium'>Flex what you’ve built with physique-enhancing cuts,
compressive fits and comfortable lifting essentials</p>
                <div className='flex items-center w-full relative right-2'>
                    <Btn className="bg-white mx-2 w-full sm:w-auto text-black" text="shop women" />
                    <Btn className="bg-[#53565a] hidden lg:block text-white" text="shop men" />
                </div>
            </div>
        </div>
    
        
        </>
    ) 
}

export default PurcePerformanceIntro
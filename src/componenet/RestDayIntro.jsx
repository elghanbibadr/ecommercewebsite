import React from 'react'
import restDayVideo from "../assets/ecomVideo.mp4"
import Btn from './UI/Btn'

const RestDayIntro = () => {
    return (
            
        <>
            {/* we need to replace t he current video with another one  */}

            <div className='relative mt-20 h-[600px]'>
                <video className="restDayVideo" src="https://videos.ctfassets.net/wl6q2in9o7k3/7KuyTMr1HaoLbhrsmqRaGW/dd70e9845c4eb4e67f08c5c59e31c0f9/Summer_Styling_Ecommerce_Matching_fits_431x767.mp4" autoPlay loop muted />
                <div className='absolute text-white top-52 left-10 '>
                    <h2 className=' text-2xl lg:text-4xl font-medium'>OUR REST DAY ‘FITS</h2>
                    <p className='my-3  text-sm lg:text-md font-medium'>Live your next rest day in comfort and style.</p>
                    <div className='flex items-center w-full right-2'>
                        <Btn className="bg-white mx-2 w-full sm:w-auto text-black" text="shop women" />
                        <Btn className="bg-[#53565a] hidden lg:block text-white" text="shop men" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default RestDayIntro
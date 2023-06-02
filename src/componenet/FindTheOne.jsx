import React from 'react'
import Btn from './UI/Btn'
import findtheoneimg from "../assets/"

const FindTheOne = () => {   
    return (
        <div className='findTheOne mt-20 text-white'>
            <img src={findtheoneimg} alt="" />
            <div className=" p-4 lg:p-10 relative top-52 ">
                <h2 className=' text-2xl lg:text-4xl font-medium'>FIND THE ONE</h2>
                <p className='my-3  text-sm lg:text-md font-medium'>Sports bras more trustworthy, supportive and reliable than your ex.</p>
                <div className='flex items-center w-full relative right-2'>
                    <Btn className="bg-white mx-2 w-full sm:w-auto text-black" text="shop " />
                </div>
            </div>
        </div>
    )
}

export default FindTheOne
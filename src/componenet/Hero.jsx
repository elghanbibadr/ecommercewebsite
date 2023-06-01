import Btn from './UI/Btn'
import storeVideo from "../assets/ecomVideo.mp4"
const Hero = () => {
   
  return (
 
    <div className='main -z-30'>
    <div className="overlay"></div>
    <video src={storeVideo} autoPlay loop muted />
    <div className="content p-10">
    <h2 className='text-4xl font-medium'>LIMITLESS. THE NEW APEX</h2>
        <p className='my-3 text-md font-medium'>Find that extra 1% with Limitless’s breathable, sweat-wicking and cool-touch tech.</p>
        <div className='flex items-center'>
            <Btn className="bg-white mx-2 text-black" text="shop new releases" />
                 <Btn className="bg-[#53565a] text-white" text="shop 315" />
        </div>
    </div>
</div>
  )
}

export default Hero
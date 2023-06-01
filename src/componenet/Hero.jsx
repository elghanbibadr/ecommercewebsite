import React ,{useEffect,useRef} from 'react'
import Btn from './UI/Btn'
import storeVideo from "../assets/ecomVideo.mp4"
const Hero = () => {
    // const videoRef = useRef(null);

    // useEffect(() => {
    //   const video = videoRef.current;
  
    //   const playVideo = () => {
    //     video.play();
    //   };
  
    //   video.addEventListener('ended', playVideo);
    //   playVideo();
  
    //   return () => {
    //     video.removeEventListener('ended', playVideo);
    //   };
    // }, []);
  return (
    // <div className='hero'>
    //     <h2>LIMITLESS. THE NEW APEX</h2>
    //    <p>Find that extra 1% with Limitless’s breathable, sweat-wicking and cool-touch tech.</p>
    //    <Btn className="bg-white text-black" text="shop new releases" />
    // <Btn className="bg-[#53565a] text-white" text="shop 315" />
    // {/* <video className='h-1/4 w-1/2' ref={videoRef} autoPlay={true} loop={true}>
    //   <source src={storeVideo} type="video/mp4" />
    // </video> */}
    // </div>
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
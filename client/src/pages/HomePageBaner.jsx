import React from 'react'
import Heading from '../utils/Heading'
import { Link } from 'react-router-dom'
const HomePageBaner = () => {
  return (
     <div className='w-full h-[800px] bg-center bg-no-repeat bg-cover pt-[190px] pb-[100px] px-0 bg-[url("./src/images/home_baner_img.png")]'>
        <div className="container">
           <div className="flex items-center justify-end"> 
              <div className="text-left w-[643px] pl-[41px] pr-0 pt-[62px] pb-8 bg-[#fff3e3]">
                    <Heading level='h4' text='New Arrival' className='text-base font-semibold w-[150px] uppercase text-[#333333] tracking-[3px] mb-1'/>
                    <Heading level='h1' text='Discover Our New Collection' className='text-[52px] font-bold text-[#B88E2F] w-[560px] capitalize mb-[17px]'/>
                    <Heading level='p' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.' className='text-base font-medium text-[#333333] w-[546px]'/>
                    <div className='flex items-center mt-[46px]'>
                        <Link to ="buynow" className=' bg-[#b88e2f] text-base font-bold text-white uppercase cursor-pointer px-[72px] py-[25px]'>buy now</Link>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default HomePageBaner
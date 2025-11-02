import React from 'react'
import { Link } from 'react-router-dom';
import Heading from '../utils/Heading'

const Footer = () => {
  return (
    <footer className = 'bg-white pt-12 pb-[38px] px-0'>
      <div className="container">
        <div className="flex justify-between flex-wrap relative w-full ">
         <div className="w-[30%] text-left">
            <div className="text-left mb-[50px]">
            <Heading level='h3' text='Funiro.' className='text-2xl font-bold text-black capitalize'/>
            </div> 
            <div className='text-left'>
              <Heading level='p' text='400 University Drive Suite 200 Coral Gables,' className=' text-left text-base font-normal text-[#9F9F9F] leading-[140%] w-[285px]'/>
'             <Heading level='p' text='FL 33134 USA' className=' text-left text-base font-normal text-[#9F9F9F] leading-[140%] w-[285px]'/>
            </div>
         </div>
         <div className='w-[70%] flex flex-row gap-x-[222px]'>
            <div className='text-left'>
              <Heading level ='h4' text='link' className=' text-base font-medium capitalize text-[#9F9F9F] mb-[50px]'/>
              <ul className="flex flex-col gap-y-[46px]">
                <li className='text-base font-medium text-black capitalize cursor-pointer'>
                  <Link to ='home'>home</Link>
                </li>
                <li className='text-base font-medium text-black capitalize cursor-pointer'>
                  <Link to ='shop'>shop</Link>
                </li>
                <li className='text-base font-medium text-black capitalize cursor-pointer'>
                  <Link to ='about'>about</Link>
                </li> 
                <li className='text-base font-medium text-black capitalize cursor-pointer'>
                  <Link to ='contact'>contact</Link>
                </li>
              </ul>
            </div>
            <div className='text-left'>
              <Heading level ='h4' text='help' className='text-base font-medium capitalize text-[#9F9F9F] mb-[50px]'/>
              <ul className="flex flex-col gap-y-[46px]">
                <li className='text-base font-medium text-black capitalize cursor-pointer'>
                  <Link to ='praymentoption'>Payment Options</Link>
                </li>
                <li className='text-base font-medium text-black capitalize cursor-pointer'>
                  <Link to ='returns'>Returns</Link>
                </li>
                <li className='text-base font-medium text-black capitalize cursor-pointer'>
                  <Link to ='privacypolicies'>Privacy Policies</Link>
                </li> 
              </ul>
            </div>
            <div className="text-left">
              <Heading level ="h4" text='newsleter' className='text-base font-medium capitalize text-[#9F9F9F] mb-[50px]'/>
              <div className="flex items-center gap-x-[11px]">
                <div className="w-full relative">
                  <input className=' w-full text-sm font-normal text-[#9F9F9F] px-0 py-2.5 border-[none]' type="text" placeholder='Enter Your Email Address'/>
                </div>
                <div className="footer-subs-btn-box">
                  <button  className='text-sm font-medium text-black uppercase cursor-pointer border-[none] bg-transparent'>SUBSCRIBE</button>
                </div>
              </div>
            </div>
         </div>
        </div>
        <div className="text-left mt-[85px]">
          <Heading level='p' text='2023 furino. All rights reverved' className='text-base font-normal text-black'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
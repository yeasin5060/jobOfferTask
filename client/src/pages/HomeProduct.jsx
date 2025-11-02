import React, { useState } from 'react'
import Heading from '../utils/Heading'
import { homeProductArray } from '../assets/assets'

const HomeProduct = () => {
    const[productArray , setProductArray] = useState(homeProductArray)
  return (
     <div className=' w-full pt-14 pb-[81px] px-0 bg-white'>
        <div className='container'>
            <div className='w-full'>
                <div className='text-center'>
                    <Heading level='h2' text='Our Products' className='text-[32px] font-bold text-[#333333] capitalize text-center'/>
                </div>
                <div className='flex items-center justify-between flex-wrap gap-8 mt-8'>
                    {
                        productArray&&
                        productArray.map((items)=> (
                            <div key={items.id} className='w-[285px] bg-[#f4f5f7]'>
                                <div className=' w-full h-[301px] overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={items.img} alt='not found' />
                                </div>
                                <div className=' text-left pl-4 pr-5 pt-4 pb-[30px]'>
                                    <Heading level='h4' text={items.name} className='text-2xl font-semibold text-[#333333] capitalize mb-2'/>
                                    <Heading level='h5' text={items.pera} className='text-base font-medium text-[#898989] mb-2.5'/>
                                    <div className='flex items-center flex-wrap gap-x-4'>
                                        <Heading level='h5' text={items.newprice} className='text-xl font-semibold text-[#3A3A3A]'/>
                                        <Heading level='h5' text={items.oldprice} className='text-base font-normal text-[#B0B0B0]'/>
                                    </div>
                                </div>    
                            </div>
                        ))
                    }
                </div>
                <div className=" flex items-center justify-center mt-11">
                    <button className='bg-transparent text-base font-semibold text-[#B88E2F] cursor-pointer capitalize border px-[74px] py-6 border-solid border-[#B88E2F]'>show more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeProduct

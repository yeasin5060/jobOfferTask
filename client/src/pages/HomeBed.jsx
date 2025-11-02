import React, { useState } from 'react'
import { homebedArray } from '../assets/assets'
import Heading from '../utils/Heading'

const HomeBed = () => {
    const[bed , setBed] = useState(homebedArray)
  return (
    <div className='w-full pt-14 pb-0 px-0 bg-white'>
        <div className='container'>
            <div className='w-full text-center mb-[66px]'>
                <Heading level='h2' text='Browse The Range' className=' text-[32px] font-bold text-[#333333] capitalize text-center mb-1'/>
                <Heading level='h4' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' className='text-xl font-normal text-[#666666]'/>
            </div>
            <div className='flex items-center justify-between flex-wrap gap-5'>
                {
                    homebedArray&&
                    bed.map((items)=> (
                        <div key={items.id} className=' w-[381px]'>
                            <div className=" w-full h-[480px] overflow-hidden rounded-[10px]">
                                <img src={items.img} alt=" w-full h-full object-cover rounded-[10px]" />
                            </div>
                            <Heading level='h4' text={items.name} className='text-2xl font-semibold text-[#333333] capitalize text-center mt-[30px]'/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HomeBed
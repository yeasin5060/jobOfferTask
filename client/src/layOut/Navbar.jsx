import React from 'react'
import logo from '../images/furniro-logo.png';
import { Link } from 'react-router-dom';
import { RiAccountCircleLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className='w-full pt-[23px] pb-9 px-0 bg-white'>
        <div className='container'>
            <div className='flex items-center justify-between flex-wrap'>
                <div className=' w-[205px] h-[45px] overflow-hidden'>
                    <img className='w-full h-full object-cover' src={logo} alt='not found' />
                </div>
                <div className='flex items-center justify-center'>
                    <ul className='flex items-center justify-center gap-x-[75px]'>
                        <li className='text-base font-medium text-black capitalize cursor-pointer'>
                            <Link to ='/'>home</Link>
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
                <div className='flex items-center justify-center gap-x-[45px]'>
                    <Link className='text-[28px] text-black cursor-pointer flex items-center justify-cente' to = "userprofile">
                        <RiAccountCircleLine />
                    </Link>
                    <Link className='text-[28px] text-black cursor-pointer flex items-center justify-cente' to = "search">
                        <IoSearchOutline />
                    </Link>
                    <Link className='text-[28px] text-black cursor-pointer flex items-center justify-cente' to ="heart">
                        <FaRegHeart />
                    </Link>
                    <Link className='text-[28px] text-black cursor-pointer flex items-center justify-cente' to = "cart">
                        <BsCart3 />
                    </Link>
                    <button className='bg-[#418b16] text-lg font-semibold text-white cursor-pointer capitalize px-5 py-2.5 rounded-[10px]'>
                        login
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

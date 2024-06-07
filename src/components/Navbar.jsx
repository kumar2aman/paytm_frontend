
import React from 'react'

import gpay from '../assets/gpay.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='flex justify-between bg-gray-400 h-16 sm:bg-slate-300'>
            <div className='mt-[-12px] ml-3'>
                <img className="size-24 p-2" src={gpay} alt="" />
            </div>
            <div className=' mt-3'>
            <div className='mr-[15px] mt-[-2px] sm:mt-0'>
                <Link to={'/signin'}>
                    <button className='cursor-pointer bg-green-500 p-2 pl-6 pr-6 rounded-lg font-bold text-[20px] sm:text-base'>SignIn</button>
                </Link>
            </div>
        </div>
        
        </div>
    )
}

export default Navbar
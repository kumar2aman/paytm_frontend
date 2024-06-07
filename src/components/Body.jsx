import React from 'react'
import { useNavigate } from 'react-router-dom'
import payment from "../assets/payment.jpg"

const Body = () => {

 const navigate = useNavigate()


  return (

    <>
    <div className='sm:flex justify-between'>
        <div className='hidden sm:block w-[80vw]'>
            <p className="font-bold text-6xl pt-28 pl-12">India's most-loved <br /> <span className='text-blue-800'>Payments App</span></p>
            <p className='font-bold pt-7 pl-12 text-xl'>Recharge & pay bills, book flights & movie tickets,<br /> open a savings account, invest in stocks & mutual <br/>funds, and do a lot more.</p>
          <button onClick={()=>navigate('/signup')} className=' cursor-pointer ml-12 mt-14 p-4 rounded-2xl text-lg font-bold bg-green-600' >SignUp Now</button>
           
            
        </div>

        <div className='mt-7 sm:size-auto' >
        <img  className="sm:h-[85vh]  sm:w-[90vw]"src={payment} alt="" /> 
        </div>
        <div className=' h-[50vh] sm:hidden  '>
            <p className="font-bold text-4xl pt-11 pl-4">India's most-loved <br /> <span className='text-blue-800'>Payments App</span></p>
            <p className='font-bold pt-7 pl-4 text-base'>Recharge & pay bills, book flights & movie tickets,<br /> open a savings account, invest in stocks & mutual funds, and do a lot more.</p>
            <button onClick={()=>navigate('/signup')} className='ml-20 mt-8 bg-green-600 p-4 rounded-xl font-semibold  pl-9 pr-9 text-2xl text-black cursor-pointer'>SignUp Now</button>
        </div>
       </div>

       

    </>
  )
}

export default Body
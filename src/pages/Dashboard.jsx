import React, { useEffect, useState } from 'react'
import gpay from '../assets/gpay.png'
import Users from '../components/Users'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { IoSearchOutline } from "react-icons/io5";





const Dashboard = () => {

const [searchParams] = useSearchParams()

const name = searchParams.get("Name")


const [amount, setAmount] = useState()
  
   
useEffect(() => {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      
    };

    axios.get('https://paytm-backend-xt1l.onrender.com/api/v1/account/balance', { headers })
      .then(response => {
        setAmount(response.data.balance);
      })
      
  }, []);

 
 
    return (
   <>
   
    <div className='flex justify-between bg-gray-400 h-16 sm:bg-slate-300'>
    <div className='mt-[-12px] ml-3'>
        <img className="size-24 p-2" src={gpay} alt="" />
    </div>
    <div className=' mt-3'>
    <div className='mr-[20px] mt-[8px] font-bold text-lg   sm:mt-0 sm:font-bold sm:text-2xl'>
        <h1>Helloo  {name}</h1>
        </div>
</div>

</div>

<div className=' h-14 mt-3'>
    <h1 className='font-bold text-2xl pt-5 pl-4'>Total Amount :-{amount} </h1>
</div>

<div className=' pl-6 mt-8 flex '>
    <div>
    <input className=' mt-0 rounded-l-xl h-14 w-[70vw] py-2 px-3 border-black border-2 font-medium  sm:w-[90vw]' type="text" />
    </div>
      <div>
    <button className='bg-gray-700 size-14 px-3 size-  rounded-r-xl  text-white'><IoSearchOutline  className='size-6'/></button>
    </div>
</div>

   
<div>


<Users/>

</div>
  


 
  
  

</>
  )
}

export default Dashboard
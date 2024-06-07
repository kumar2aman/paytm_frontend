import React, { useState } from 'react'
import axios from "axios"
import { Button } from '../components/Button'
import { InputBox } from '../components/Inputbox'
import { Link, Navigate, useNavigate } from 'react-router-dom'


const Signup = () => {

  const [username, setuserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   const Navigate = useNavigate()
  

  return (

    <div className=' mt-36'>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
        <h2 className="text-3xl font-bold pl-28 sm:pl-[150px]">Signup</h2>
        <InputBox onChange={(e) => setuserName(e.target.value)} type={"text"} label={"Username"} />
        <InputBox onChange={(e) => setEmail(e.target.value)} type={"email"} label={"Email"} />
        <InputBox onChange={(e) => setPassword(e.target.value)} type={"password"} label={"Password"} />
        <div>
          <Button  button={"Signup"} onClick={async () => {
            const response = await axios.post("https://paytm-backend-xt1l.onrender.com/api/v1/user/signup", {
              username,
              email,
              password
            },
           
            
            )
             localStorage.setItem("token", response.data.token)
             
             
             if (response.data.token) {
              Navigate("/dashboard?Name="+ username)
              } else {
              prompt("invalid input")
             }
          }} />
        
          <div className='px-20 py-8'>
          <h3 className='font-bold'>Already have a account <Link to={"/signin"} className='text-blue-800 underline'> Signin</Link></h3>
          </div>
        
        </div>
      </div>


    </div>

  )
}

export default Signup
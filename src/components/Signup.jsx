import React, { useState } from 'react'
import axios from "axios"

const Signup = () => {
  
  const [username, setuserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  
  
  
  
  return (
   

    
  


   <div className=' mt-36'>
    {username}
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
  <h2 className="text-3xl font-bold pl-28 sm:pl-[150px]">Signup</h2>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2">Username</label>
    <input onChange={(e)=> setuserName(e.target.value)} type="text" id="username" className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded" placeholder="Username"/>
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" >Email</label>
    <input onChange={(e)=> setEmail(e.target.value)} type="email" id="email" className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded" placeholder="Email"/>
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
    <input  onChange={(e)=> setPassword(e.target.value)} type="password" id="password" className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded" placeholder="Password"/>
  </div>
  <button   onClick={async ()=>{
   const response =  await axios.post("http://localhost:3000/api/v1/user/signup", {
      username,
      email,
      password
    })
    console.log(response.data.token)
     localStorage.setItem("token", response.data.token)
  }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer " >Signup</button>
</form>
   </div>
  )
}

export default Signup
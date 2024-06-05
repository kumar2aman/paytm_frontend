import React from 'react'

const Signin = () => {
  return (
    <div className=' mt-36'>
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
  <h2 className="text-3xl font-bold pl-28 sm:pl-[150px]">Signin</h2>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>
    <input type="text" id="username" className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded" placeholder="Username"/>
  </div>
 
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
    <input type="password" id="password" className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded" placeholder="Password"/>
  </div>
  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded">Signin</button>
</form>
   </div>
  )
}

export default Signin
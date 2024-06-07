import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Dashboard from '../pages/Dashboard'
import { useNavigate } from 'react-router-dom'

// import Alluser from "./Alluser"


const Users = () => {

  

    const [user, setUser] = useState([])

    


   useEffect(()=>{
    axios.get("https://paytm-backend-xt1l.onrender.com/api/v1/user/total")
    .then(response=>{
        setUser(response.data.user)
       
    })
   }, [])   




  return (
    <>
    <div className='font-bold mt-6 ml-2 text-lg'>
        Users :-
    </div>



   <div>
       {user.map((Users)=> < Alluser users={Users}/>)}

    </div>

    <div className='mt-5 mx-4 flex justify-between'>
      <h1 className='font-bold text-xl pt-2'>Test</h1>
      <button  className='bg-green-600 mr-4 py-2 px-2 rounded-xl text-white' >Send  Money</button>
     </div>
    
     
    
    </>
    
  )
}

function Alluser ({users}){
  const navigate = useNavigate()
    return (<>
    
    <div className='mt-5 mx-4 sm:mx-7 flex justify-between'>
      <h1 className='font-bold text-xl pt-2'>{users.username}</h1>
      <button onClick={()=>{
      navigate("/send?id=" + users._id + "&name=" + users.username);
 }} className='bg-green-600 mr-4 py-2 px-2 rounded-xl text-white' >Send  Money</button>
     </div>
     
    </>
      
     )

}






export default Users
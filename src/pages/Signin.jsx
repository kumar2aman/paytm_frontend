import React, { useState } from 'react'
import { Button } from '../components/Button'
import { InputBox } from '../components/Inputbox'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const Signin = () => {

  const navigator = useNavigate()

  const [username, setuserName] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className=' mt-36'>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
        <h2 className="text-3xl font-bold pl-28 sm:pl-[150px]">Signin</h2>
        <InputBox onChange={(e) => setuserName(e.target.value)} type={"text"} label={"Username"} />
        <InputBox onChange={(e) => setPassword(e.target.value)} type={"password"} label={"Password"} />
        <div>
          <Button button={"Signin"} onClick={async () => {
            const response = await axios.post("https://paytm-backend-xt1l.onrender.com/api/v1/user/signin", {
              username,
              password
            }

            )
            localStorage.setItem("token", response.data.token)

            if (response.data.token) {


              navigator("/dashboard?Name="+ username)
            } else {
              prompt("invalid username/password")
            }
          }} />
        </div>
      </div>
    </div>
  )
}

export default Signin
import React, {Component, Fragment} from 'react';
import './App.css'
import { Router, Route, RouterProvider, BrowserRouter, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
import Transfer from './pages/Transfer';


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path="/send" element={<SendMoney />} />
      <Route path="/transfer" element={<Transfer/>} />
    </Routes>
    
    </BrowserRouter>
   

    
  
    </>
  )
}

export default App

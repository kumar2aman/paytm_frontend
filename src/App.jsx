import React, {Component, Fragment} from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { Router, Route, RouterProvider, BrowserRouter, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<div><Navbar/> <Body/></div>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
    
    </BrowserRouter>
   

    
  
    </>
  )
}

export default App

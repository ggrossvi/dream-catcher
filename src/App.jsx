import Product from './Member'
import './App.css'
import React, { useState, useEffect } from 'react';
import Form from './Register'
import { Route, Routes, Router } from 'react-router-dom';
import Home from './Home';
import NavbarBootstrap from './navbar/navbarBS';
import TagsInput from './TagsInput';
// import { NavbarBootstrap } from './navbarBS';
//import React from 'react';
// import{ LinkedInApi, NodeServer } from './config';
// import axios from 'axios';
// import linkedInLoginImage from './linkedin-login-images/Retina/Sign-In-Small---Default.png';

function App() {

  let [showProduct, setShowProduct] = useState(true);
  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://localhost:8800/users')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }, [])

  return (

    <div className='App'>
      <NavbarBootstrap />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/form" element={<Form />} />
        <Route path="/tags" element={<TagsInput />} />  
      </Routes>

      <Home />


    </div>
  )
}

export default App

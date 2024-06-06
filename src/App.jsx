import Product from './Product'
import './App.css'
import React, { useState, useEffect } from 'react';
import Form from './Register'
import { Route, Routes, Router } from 'react-router-dom';
import Home from './Home';
import { NavbarBootstrap } from './navbarBS';

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
      <NavbarBootstrap />{/* 
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/product">Product</a></li>
          <li><a href="/form">Form</a></li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/form" element={<Form />} />

      </Routes>




    </div>
  )
}

export default App

import Product from './Product'
import './App.css'
import React, { useState } from 'react';
import Form from './Form'
import { Route, Routes,Router } from 'react-router-dom';
import Home from './Home';

function App() {

  let [showProduct, setShowProduct] = useState(true);
  let [showForm, setShowForm] = useState(false);


  return (

    <div className='App'>

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/product" element={<Product />} />
          <Route path="/form" element={<Form />} />
              
        </Routes>

    
     

    </div>
  )
}

export default App

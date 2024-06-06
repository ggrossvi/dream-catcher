import Product from './Product'
import './App.css'
import React, { useState } from 'react';
import Form from './Form'


function App() {

  let [showProduct, setShowProduct] = useState(true);
  let [showForm, setShowForm] = useState(false);


  return (
    <>
      <h1>Use Effect Demo</h1>


      <button onClick={() => {
        setShowProduct(true);
      }}>Show Product</button>

      <button onClick={() => {
        setShowProduct(false);
      }}>Hide Product</button>

      {<button onClick={() => {
        setShowForm(true);
        setShowProduct(false);
      }}>Email Form</button>}

      {showProduct === true ?
        (
          <Product />
        ) :
        (
          <h1>Product Not Available</h1>
        )
      }
      {showForm === true ?
        (
          <Form />
        ) :
        (
          <h1>Page not found</h1>
        )
      }

    </>
  )
}

export default App

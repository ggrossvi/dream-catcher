import Product from './Product'
import './App.css'
import React, { useState } from 'react';

function App() {

  let [showProduct, setShowProduct] = useState(true);


  return (
    <>
      <h1>Use Effect Demo</h1>


      <button onClick={() => {
        setShowProduct(true);
      }}>Show Product</button>

      <button onClick={() => {
        setShowProduct(false);
      }}>Hide Product</button>

      {showProduct === true ?
        (
          <Product />
        ) :
        (
          <h1>Product Not Available</h1>
        )
      }
    </>
  )
}

export default App

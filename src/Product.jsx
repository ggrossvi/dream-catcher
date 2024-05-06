import React, { useState, useEffect } from 'react'


const Product = () => {

  useEffect(() => {
    console.log('Product Mounted');
  } , [])


  return (
    <div className="product">
      <h1>Samsung M51</h1>
      <h3>10,000</h3>
    </div>
  )
}

export default Product


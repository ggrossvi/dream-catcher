import React, { useState, useEffect } from 'react'


const Product = () => {

  let [name, setName] = useState('Iphone 13');


  useEffect(() => {
    console.log('Product Mounted');
  } , [])


  return (
    <div className="product">
      <h1>{name}</h1>
      <h3>10,000</h3>
      <button onClick={() => setName('Samsung S22')}>Change Name</button>
    </div>
  )
}

export default Product


import React, { useState, useEffect } from 'react'


const Product = () => {

  let [name, setName] = useState('Iphone 13');
  let [price, setPrice] = useState(1000);

  useEffect(() => {
    console.log('Product Mounted');
  }, [])


  return (
    <div className="product">
      <h1>{name}</h1>
      <h3>{price}</h3>
      <button onClick={() => setName('Samsung S22')}>Change Name</button>
      <button onClick={() => setPrice('134000')}>Change Price</button>
    </div>
  )
}

export default Product


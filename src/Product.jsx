import React, { useState, useEffect } from 'react'


const Product = () => {

  let [name, setName] = useState('Iphone 13');
  let [price, setPrice] = useState(1000);

  // by default useEffect will run after every render
  // it will run only once after the component is mounted if you add the dependency array as the second argument
  // if you pass variables in the dependency array, it will be called for first render and run only when those variables value changes.  Use effect is dependent on the price variable.  

  useEffect(() => {
    console.log('Product Mounted');
  }, [price])


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


import React, { useState, useEffect } from 'react'


const Member = () => {

  let [name, setName] = useState('Iphone 13');
  let [price, setPrice] = useState(1000);
  let [products, setProducts] = useState([]);
  //let [products, setProducts] = useState([]);
  

  // by default useEffect will run after every render
  // it will run only once after the component is mounted if you add the dependency array as the second argument
  // if you pass variables in the dependency array, it will be called for first render and run only when those variables value changes.  
  // Use effect is dependent on the price variable.  
  // you can have multiple use effect hooks in the same component

  useEffect(() => {
    console.log('Product Mounted');


    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // have to use the setProducts to update the state.  Put data into the products array
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      })


    // return is called when component unmounts
    return () => {
      console.log('Product UnMounted');
    }
  }, [])


  return (
    <>
      <h1>Members</h1>
      <div className="products">

        {/* <h1>{name}</h1>
      <h3>{price}</h3> */}



        {products.map((product, index) => {
          return (
            <div className='product' key={index}>
              <img className='p-image' src={product.image} alt={product.title} />
              <h3 className='p-title' >{product.title}</h3>
              <h4 className='p-price'>${product.price}</h4>
              {/* <p className='p-description'>{product.description}</p> */}
            </div>
          )
        })}

        {/*  <button onClick={() => setName('Samsung S22')}>Change Name</button>
      <button onClick={() => setPrice('134000')}>Change Price</button> */}
      </div>
    </>
  )
}

export default Member


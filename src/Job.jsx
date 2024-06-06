import Product from './Product'
import './App.css'
import React, { useState } from 'react';
import Form from './Register'
import { Route, Routes, Router } from 'react-router-dom';
import Home from './Home';

function Job() {

    let [showProduct, setShowProduct] = useState(true);
    let [showForm, setShowForm] = useState(false);


    return (

        <div className='Members'>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/form" element={<Form />} />

            </Routes>


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

        </div>
    )
}

export default Job

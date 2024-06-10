import Member from './Member'
import './App.css'
import React, { useState, useEffect } from 'react';
import Form from './Register'
import { Route, Routes, Router } from 'react-router-dom';
import Home from './Home';
import NavbarBootstrap from './navbar/navbarBS';
import TagsInput from './TagsInput';
import MemberList from './MemberList';
// import { NavbarBootstrap } from './navbarBS';
//import React from 'react';
// import{ LinkedInApi, NodeServer } from './config';
// import axios from 'axios';
// import linkedInLoginImage from './linkedin-login-images/Retina/Sign-In-Small---Default.png';

function App() {
  return (
    <div className='App'>
      <NavbarBootstrap />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<MemberList/>} />
        <Route path="/form" element={<Form />} />
        <Route path="/tags" element={<TagsInput />} />  
      </Routes>
      
    </div>
  )
}

export default App

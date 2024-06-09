import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//https://www.w3schools.com/react/react_forms.asp

const Form = () => {
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [userName, setUserName]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${fname} ${lname}`);
      }
      
      return (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={fname}
              onChange={(e) => setfName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lname}
              onChange={(e) => setlName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      );
}

export default Form;
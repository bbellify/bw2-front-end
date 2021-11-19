
//inputs: username and password
//submit button
//push to /plants (PlantList.js)

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../LoginStyle.css";

import axios from 'axios'


export default function Login() {

  const initialValues = { username: '', password: ''}

  const [formValues, setFormValues] = useState(initialValues); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://buildweek-water-my-plants.herokuapp.com/api/auth/login`, formValues)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        navigate('/plants')
      })
      .catch(err => {
        console.log(formValues)
        console.log({err})
      })
  };


  return (
    <div className="form-container">
      <h1>Welcome Back! </h1>
      <form onSubmit={onSubmit}>
        <label>Username
          <input
            type='text'
            value={formValues.username}
            name='username'
            onChange={handleChange}
            />
            </label>
          <label>Password
            <input
              // type='password'
              value={formValues.password}
              name='password'
              onChange={handleChange}
              />
            </label>
      <button  
      color="primary" 
      type="submit" 
      // disabled={disabled}
      >
        Login
      </button>
      </form>
      <Link className="NewUser" to="/newuser">
        New User? 
      </Link>
    </div>
  );
}
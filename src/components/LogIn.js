
//inputs: username and password
//submit button
//push to /plants (PlantList.js)

import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginFormSchema from "../utils/loginFormSchema";
import FormBuilder from "../utils/FormBuilder";
import "../LoginStyle.css";



export default function Login() {

  const fields = [
    { id: "username", type: "text", label: "Username" },
    { id: "password", type: "text", label: "Password" },
  ];

  let init = {};
  fields.forEach((field) => (init[field.id] = ""));

  // eslint-disable-next-line
  const [values, setValues] = useState(init);
  const [disabled, setDisabled] = useState(true);


  const onSubmit = (e) => {
    e.preventDefault();
  };

  const getFormState = (state) => {
    setValues(state.values);
    setDisabled(state.disabled);
 }

  return (
    <div className="form-container">
      <h1>Welcome Back! </h1>
      <form onSubmit={onSubmit}>
        <FormBuilder
          fields={fields}
          init={init}
          validationSchema={loginFormSchema}
          getFormState={getFormState}
        />
        <button  color="primary" type="submit" disabled={disabled}>
          Login
        </button>
      </form>
      <Link className="NewUser" to="/newuser">
        New User? 
      </Link>

      {/* <Link className="forgotpw" to ="/resetpassword">
          Forgot Password?
      </Link> */}
    </div>
  );
}
import React, {useState} from "react";
import { Link } from "react-router-dom";
import signupFormSchema from "../utils/signupFormSchema";
import FormBuilder from "../utils/FormBuilder";
import "../LoginStyle.css";


export default function NewUser() {

  const fields = [
    { id: "username", type: "text", label: "Username" },
    { id: "password", type: "text", label: "Password" },
    { id: "phone", type: "text", label: "Phone" },
  ];

  let init = {};
  fields.forEach((field) => (init[field.id] = ""));

  // eslint-disable-next-line
  const [values, setValues] = useState(init);
  const [disabled, setDisabled] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  };

  const getFormState = (state) => {
    setValues(state.values);
    setDisabled(state.disabled);
 }
  return (
    <div className="form-container">
      <h2>Create Your Account</h2>
      <form onSubmit={onSubmit}>
        <FormBuilder
          fields={fields}
          init={init}
          validationSchema={signupFormSchema}
          getFormState={getFormState}
        />
      <button type="submit" disabled={disabled}>
        Sign Up
      </button>
      </form>
      <Link className="forgotpw" to="/login">
        Already registered? Sign in.
      </Link>
    </div>
  );
}
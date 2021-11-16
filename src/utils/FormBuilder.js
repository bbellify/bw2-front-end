import React, { useState, useEffect } from "react";
import * as Yup from "yup";

export default function FormBuilder(props) {
  // Pass in a few props to generate input fields w/ validation for your form
  // fields should be an object array with id, type, and label
  // init should an object with field id as keys and empty string values
  // validationSchema should be a proper Yup schema
  // getFormState is a callback that will pass state data back up to parent for consumption

  const { fields, init, validationSchema, getFormState } = props;

  const [values, setValues] = useState(init);
  const [errors, setErrors] = useState(init);
  const [disabled, setDisabled] = useState(true);

  const setFormErrors = (name, value) => {
    Yup.reach(validationSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  // Watch for validation errors and enable/disable submit button accordingly
  useEffect(() => {
    let formState = {values:values,disabled:disabled}
    getFormState(formState);
    validationSchema.isValid(values).then((valid) => {
      setDisabled(!valid);
    });
  }, [values, disabled, getFormState, validationSchema]);

  // validate is called onBlur and directly by onChange when warranted
  const validate = (e) => {
    const { name, value } = e.target;
    setFormErrors(name, value);
  };

  // onChange function to maintain stain and make validate calls when warranted
  const change = (e) => {
    const { name, value } = e.target;
    JSON.stringify(errors) !== JSON.stringify(init) && validate(e);
    setValues({ ...values, [name]: value });
  };


  // helper method to create the proper input dom elements
  function createInput(field) {
    let input;
    let props = {
      id: field.id,
      name: field.id,
      value: values[field.id],
      className: errors[field.id].length > 0 ? "error" : "",
      onChange: change,
      onBlur: validate,
    };

    if (field.type !== "textarea") {
      props.type = field.type;
      input = React.createElement("input", props);
    } else if (field.type === "textarea") {
      // ignoring 'type' as it is an unsupported attribute for textareas
      input = React.createElement("textarea", props);
    }

    return input;
  }

  // Return our input fields
  return (
    <div>
      {fields.map((field) => (
        <div key={field.id} className={`${field.type}-input`}>
          <label htmlFor={field.id}>{field.label}</label>
          {createInput(field)}
          <p className="errors">&nbsp;{errors[field.id]}</p>
        </div>
      ))}
    </div>
  );
}
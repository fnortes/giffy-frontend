import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import register from "services/register";

const validate = values => {

  const errors = {};

  if (!values.username) {
    errors.username = 'Required username';
  }

  if (!values.password) {
    errors.password = 'Required password';
  } else if (values.password.length < 3) {
    errors.password = 'Length must be greater than 3';
  }

  return errors;

};

const initialValues = {
  username: '',
  password: ''
};

export default function Register() {

  const [registered, setRegistered] = useState(false);

  const handleSubmit = (values, { setFieldError }) =>
    register(values)
      .then(() => {
        setRegistered(true);
      })
      .catch(() => {
        setFieldError('username', 'This username is not valid');
      });

  if (registered) {
    return <h4>Congratulations ✅! You've been successfully registered!</h4>
  }

  return <>
    <h2>Formulario de registro</h2>
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ errors, isSubmitting }) =>
        <Form className="gf-form">
          <Field
            className={errors.username && 'error'}
            name="username"
            placeholder="Put here the username"
            type="text"
          />
          <ErrorMessage className="error" name="username" component="small" />
          <Field
            className={errors.password && 'error'}
            name="password"
            placeholder="Put here the password"
            type="password"
          />
          <ErrorMessage className="error" name="password" component="small" />
          <button className="btn" disabled={isSubmitting}>Registrarse</button>
        </Form>
      }
    </Formik>
  </>;

}
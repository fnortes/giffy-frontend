import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import registerService from "services/register";

export default function Register() {

  const { handleSubmit, register, errors } = useForm();

  const [registered, setRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = values => {

    setIsSubmitting(true);

    registerService(values)
      .then(() => {

        setRegistered(true);
        setIsSubmitting(false);

      });

  };

  if (registered) {
    return <h4>Congratulations ✅! You've been successfully registered!</h4>
  }

  return <>
    <h2>Formulario de registro</h2>
    <form className="gf-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className={errors.username && 'error'}
        name="username"
        placeholder="Put here the username"
        type="text"
        ref={register({ required: 'The username is required' })}
      />
      <ErrorMessage errors={errors} name="username" as="small" />
      <input
        className={errors.password && 'error'}
        name="password"
        placeholder="Put here the password"
        type="password"
        ref={register({ required: 'The password is required' })}
      />
      <ErrorMessage errors={errors} name="password" as="small" />
      <button className="btn" disabled={isSubmitting}>Registrarse</button>
    </form>
  </>;

}
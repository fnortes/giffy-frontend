import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, pushLocation] = useLocation();
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser();

  useEffect(() => {
    if (isLogged) pushLocation('/');
  }, [isLogged, pushLocation]);

  const handleOnSubmit = e => {

    e.preventDefault();

    login({ username, password });

  };

  return (
    <>
      <h2>Login</h2>
      {isLoginLoading
        ? <div><strong>Checking credentials ...</strong></div>
        : <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <button>Login</button>
          {hasLoginError && <div><strong>Credenciales no válidas</strong></div>}
        </form>}
    </>
  );

}
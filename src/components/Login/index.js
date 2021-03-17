import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import "./Login.css";

export default function Login({ onLogin }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, pushLocation] = useLocation();
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser();

  useEffect(() => {

    if (isLogged) {
      pushLocation('/');
      onLogin && onLogin();
    }

  }, [isLogged, onLogin, pushLocation]);

  const handleOnSubmit = e => {

    e.preventDefault();

    login({ username, password });

  };

  console.log(isLoginLoading);

  return (
    <>
      {isLoginLoading
        ? <div><strong>Checking credentials ...</strong></div>
        : <form className="gf-form" onSubmit={handleOnSubmit}>
          <label>
            Username
            <input
              type="text"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
          </label>
          <label>
            Password
          <input
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button className="btn">Login</button>
          {hasLoginError && <div><strong>Credenciales no válidas</strong></div>}
        </form>}
    </>
  );

}
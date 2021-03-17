import useUser from "hooks/useUser";
import React from "react";
import { Link, useRoute } from "wouter";

import "./Header.css";

export default function Header() {

  const { isLogged, logout } = useUser();
  const [match] = useRoute('/login');

  const handleOnClick = e => {
    e.preventDefault();
    logout();
  };

  return (
    <header className="gf-header">
      {match
        ? null
        : isLogged
          ? <Link to="#" onClick={handleOnClick}>Logout</Link>
          : <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>}
    </header>
  );

}
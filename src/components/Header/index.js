import useUser from "hooks/useUser";
import React from "react";
import { Link } from "wouter";

import "./Header.css";

export default function Header() {

  const { isLogged, logout } = useUser();

  const handleOnClick = e => {
    e.preventDefault();
    logout();
  };

  return (
    <header className="gf-header">
      {isLogged
        ? <Link to="#" onClick={handleOnClick}>Logout</Link>
        : <Link to="/login">Login</Link>}
    </header>
  );

}
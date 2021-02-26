import React from 'react';
import { Link, Route } from 'wouter';
import 'App.css';
import Detail from 'pages/Detail/index';
import Home from 'pages/Home/index';
import SearchResults from 'pages/SearchResults/index';
import Login from 'pages/Login/index';
import { UserContextProvider } from "context/UserContext";
import { GifsContextProvider } from 'context/GifsContext';
import Header from 'components/Header';
import logo from "./logo.png";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <section className="App-content">
          <Header />
          <div>
            <Link to="/">
              <figure className="App-logo">
                <img src={logo} alt="Giffy Logo" />
              </figure>
            </Link>
          </div>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword/:rating?" />
            <Route component={Detail} path="/gif/:id" />
            <Route component={Login} path="/login" />
            <Route component={() => <h1>404 ERROR :(</h1>} path="/404" />
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  );
}

export default App;

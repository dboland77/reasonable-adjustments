import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../styles/index.css"

import { dbgetCurrentUser, dblogout } from "../services/auth.service"

import {Login, Register, Home, Profile, Gallery, NotFound, User} from "."


export const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = dbgetCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    dblogout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
         Reasonable Adjustments System 
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {currentUser && (
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <Routes>
        <Route  path={"/"} element={<Home/>} />
        <Route  path={"/home"} element={<Home/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/register" element={<Register/>} />
        <Route  path="/profile" element={<Profile/>} />
        <Route path="/user" element={<User/>} />
        <Route  path="/Gallery" element={<Gallery/>} />
        <Route  path="/not-found" element={<NotFound/>} />
      </Routes>
    </div>
  );
};


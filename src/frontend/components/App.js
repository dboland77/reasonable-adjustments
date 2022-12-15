import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/global.css";


import { Login, Register, Home, Profile, Gallery, NotFound, User } from ".";

export const App = () => {
  
  return (
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<User />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
  );
};

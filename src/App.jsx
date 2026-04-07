import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./layout/home";
import Login from "./layout/login";
import SignIn from "./layout/signIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default App;
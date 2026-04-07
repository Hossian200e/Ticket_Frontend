import React from "react";
import Home from "./layout/home";
import Login from "./layout/login";

const App = () => {
  return (
    <div>
      {/* Simple routing logic (no react-router yet) */}
      {window.location.pathname === "/login" ? <Login /> : <Home />}
    </div>
  );
};

export default App;
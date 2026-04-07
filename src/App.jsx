import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";

// Dashboards
import AdminDashboard from "./pages/admin/dashboard/dashboard";
import DevelopmentDashboard from "./pages/development/dashboard/dashboard";
import InstituteDashboard from "./pages/institute/dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home is now standalone */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        {/* Dashboards */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/development/dashboard" element={<DevelopmentDashboard />} />
        <Route path="/institute/dashboard" element={<InstituteDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
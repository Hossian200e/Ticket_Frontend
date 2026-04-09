import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./layout/home";
import Login from "./layout/login";
import SignIn from "./layout/signIn";

// Dashboards
import AdminDashboard from "./Pages/admin/dashboard/dashboard";
import DevelopmentDashboard from "./Pages/development/dashboard/dashboard";
import SupportDashboard from "./Pages/support/dashboard/dashboard";
import KAMDashboard from "./Pages/kam/dashboard/dashboard";
import InstituteDashboard from "./Pages/institute/dashboard/dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />

      {/* Dashboard Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/development/dashboard" element={<DevelopmentDashboard />} />
      <Route path="/support/dashboard" element={<SupportDashboard />} />
      <Route path="/kam/dashboard" element={<KAMDashboard />} />
      <Route path="/institute/dashboard" element={<InstituteDashboard />} />
    </Routes>
  );
};

export default App;

sdasda
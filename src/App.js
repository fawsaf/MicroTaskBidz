import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import GetDetails from "./pages/GetDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/signup" element={<SignUp />} />
      <Route path="/user/signin" element={<Signin />} />
      <Route path="/user/password" element={<ResetPassword />} />
      <Route path="/user/password/change" element={<ChangePassword />} />
      <Route path="/user/" element={<GetDetails />} />
    </Routes>
  );
}

export default App;

import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { Home } from "../Home";
import { MyContext } from "../../App";
import { SignUp } from "../SignUp";
import OTPVerificationPage from "../OTPVerificationPage";
import Role from "../roles/Role";

export const AppRoutes = () => {
  const { isAuthenticated } = useContext(MyContext);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/roles"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Role />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<OTPVerificationPage />} />
      </Routes>
    </Router>
  );
};

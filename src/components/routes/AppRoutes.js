import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { Home } from "../Home";
import { MyContext } from "../../App";
import { SignUp } from "../SignUp";
import OTPVerificationPage from "../OTPVerificationPage";

export const AppRoutes = () => {
  const { isAuthenticated } = useContext(MyContext);
  const [user, setUser] = useState({});

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
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/signup"
          element={<SignUp setUser={setUser} user={user} />}
        />
        <Route
          path="/otp"
          element={<OTPVerificationPage setUser={setUser} user={user} />}
        />
      </Routes>
    </Router>
  );
};

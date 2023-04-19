import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { Home } from "../Home";
import { MyContext } from "../../App";
import { SignUp } from "../SignUp";

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

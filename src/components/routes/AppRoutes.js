import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { Home } from "../Home";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

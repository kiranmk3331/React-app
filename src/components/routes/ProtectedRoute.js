import React, { Fragment, useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "../../App";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(MyContext);

  return (
    <Fragment>
      {isAuthenticated === true ? children : <Navigate to="/login" />}
    </Fragment>
  );
};

export default ProtectedRoute;

import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);

  return (
    <Route
      render={() =>
        isAuthenticated ? <Component/> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;
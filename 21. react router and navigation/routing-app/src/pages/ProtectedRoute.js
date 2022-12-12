import React from "react";
import { Navigate } from "react-router";
import { Outlet } from "react-router-dom";

function ProtectedRoute() {

    const isLoggedIn = true;

    return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" /> }</>;
}

export default ProtectedRoute;

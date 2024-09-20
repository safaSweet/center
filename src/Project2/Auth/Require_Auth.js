import React from "react";
import Cookies from "cookie-universal";
import { Outlet, Navigate } from "react-router-dom";

export default function Require_Auth() {
    const cookies=Cookies();
  const userauth = cookies.get("details");
  return userauth !== ""? <Outlet /> : <Navigate to="./Login.js" />;
}

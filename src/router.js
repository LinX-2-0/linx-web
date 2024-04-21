import React from "react";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import Profile from "./containers/Profile";
import Settings from "./containers/Settings";
import { Routes, Route, createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/settings",
        element: <Profile />,
      },
      {
        path: "/profile",
        element: <Settings />,
      },
  ]);

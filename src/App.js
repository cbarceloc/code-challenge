import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import { AddsProvider } from "store/AddsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

export default (
  <React.StrictMode>
    <AddsProvider>
      <RouterProvider router={router} />
    </AddsProvider>
  </React.StrictMode>
);

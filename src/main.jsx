import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Layout
import GuestLayout from "./layouts/GuestLayout";

import App from "./App";

const router = createBrowserRouter([
  {
    element: <GuestLayout />,
    children: [
      { path: "/", element: <App /> },
      // { path: "/about", element: <About /> }, // example
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

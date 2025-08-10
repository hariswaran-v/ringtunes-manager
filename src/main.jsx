import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Layout
import GuestLayout from "./layouts/GuestLayout";

// Pages
import Home from "./pages/Home";
// import About from "./pages/About"; // example extra page

const router = createBrowserRouter([
  {
    element: <GuestLayout />,
    children: [
      { path: "/", element: <Home /> },
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

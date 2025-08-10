import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function GuestLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 ">
      {/* Navbar */}

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

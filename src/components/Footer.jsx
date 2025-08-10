import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Ringtunes</h3>
            <p className="text-gray-400">
              Create and discover amazing ringtones for your device.
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/hariswaran-venkatesh/"
                className="text-gray-400 hover:text-[#0A66C2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/hariswaran-v"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/hariswaran.venkatesh/"
                className="text-gray-400 hover:text-[#E4405F]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ringtunes. Developed by{" "}
            <a
              href="https://www.linkedin.com/in/hariswaran-venkatesh/"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hariswaran
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

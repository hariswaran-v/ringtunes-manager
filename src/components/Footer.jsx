import { Volume2, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Volume2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">RingTunes</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Create and discover amazing ringtones for your device. Premium
              quality sounds for every mood and occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:text-pink-400 transition-colors"
              >
                Popular Ringtones
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-pink-400 transition-colors"
              >
                Categories
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-pink-400 transition-colors"
              >
                Upload
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-pink-400 transition-colors"
              >
                My Favorites
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/hariswaran-venkatesh/"
                className="p-3 bg-white/10 rounded-xl text-gray-300 hover:text-blue-400 hover:bg-white/20 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/hariswaran-v"
                className="p-3 bg-white/10 rounded-xl text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/hariswaran.venkatesh/"
                className="p-3 bg-white/10 rounded-xl text-gray-300 hover:text-pink-400 hover:bg-white/20 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} RingTunes. Developed with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/hariswaran-venkatesh/"
              className="text-pink-400 hover:text-pink-300 font-semibold transition-colors"
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

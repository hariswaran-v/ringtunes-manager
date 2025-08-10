import React, { useState } from "react";
import {
  Search,
  Play,
  Pause,
  Download,
  Heart,
  Star,
  Filter,
  Grid,
  List,
  Upload,
  Settings,
  User,
  Github,
  Linkedin,
  Instagram,
  Volume2,
} from "lucide-react";

// Banner Component
const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 px-6 py-8 sm:px-12">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Volume2 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            RingTunes
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-pink-600 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
            <Settings className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Download <span className="text-pink-600">RingTunes</span> <br />
          <span className="text-2xl text-purple-600">in Seconds...</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Discover premium quality ringtones for every mood
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by artist, movie names, etc."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-md border-2 border-pink-200 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition-all duration-300"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Upload className="w-5 h-5" />
            <span>Upload Ringtone</span>
          </button>
          <button className="flex items-center space-x-2 bg-white/80 backdrop-blur-md border-2 border-pink-200 hover:bg-pink-50 text-pink-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">
            <Heart className="w-5 h-5" />
            <span>My Favorites</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
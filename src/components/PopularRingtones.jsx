import React, { useState, useRef, useEffect } from "react";
import {
  Grid,
  List,
  Heart,
  Volume2,
  Star,
  Play,
  Download,
  Pause,
} from "lucide-react";
import { ringtones } from "../data/data";

const PopularRingtones = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const audioRef = useRef(null);

  const togglePlay = (id) => {
    if (currentPlaying === id) {
      // Pause if same ringtone playing
      audioRef.current.pause();
      setCurrentPlaying(null);
    } else {
      // Play selected ringtone
      const tone = ringtones.find((r) => r.id === id);
      if (audioRef.current) {
        audioRef.current.src = tone.audioUrl;
        audioRef.current.play();
        setCurrentPlaying(id);
      }
    }
  };

  // When audio ends, reset currentPlaying to null
  useEffect(() => {
    if (!audioRef.current) return;

    const handleEnded = () => setCurrentPlaying(null);

    audioRef.current.addEventListener("ended", handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "pop":
        return "bg-pink-100 text-pink-600 border-pink-200";
      case "rock":
        return "bg-red-100 text-red-600 border-red-200";
      case "electronic":
        return "bg-purple-100 text-purple-600 border-purple-200";
      default:
        return "bg-blue-100 text-blue-600 border-blue-200";
    }
  };

  return (
    <section className="mx-6 mt-8">
      <audio ref={audioRef} />
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-bold text-2xl text-gray-800">Popular Ringtones</h4>
        <div className="flex items-center space-x-2 hidden md:flex">
          <button className="p-2 rounded-lg bg-white border-2 border-gray-200 hover:border-pink-400 transition-colors">
            <Grid className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-lg bg-white border-2 border-gray-200 hover:border-pink-400 transition-colors">
            <List className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Desktop/Tablet Card View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ringtones.map((tone) => (
          <div
            key={tone.id}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100 hover:border-pink-200"
          >
            {/* Header with Category and Favorite */}
            <div className="flex items-center justify-between mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getCategoryColor(
                  tone.category
                )}`}
              >
                {tone.category}
              </span>
              <button
                onClick={() => toggleFavorite(tone.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${
                    favorites.has(tone.id) ? "fill-current text-red-500" : ""
                  }`}
                />
              </button>
            </div>

            {/* Music Icon and Content */}
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Volume2 className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-lg text-gray-800 truncate">
                  {tone.title}
                </h5>
                <p className="text-gray-600 text-sm">by {tone.artist}</p>
                <p className="text-gray-500 text-xs">
                  Uploaded by {tone.uploader}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600">{tone.rating}</span>
              </div>
              <span className="text-sm text-gray-600">
                {tone.downloads} downloads
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-lg text-xs font-medium border border-orange-200">
                {tone.duration}
              </span>
              <span className="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-xs font-medium border border-green-200">
                {tone.size}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => togglePlay(tone.id)}
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {currentPlaying === tone.id ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span className="text-sm">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span className="text-sm">Play</span>
                  </>
                )}
              </button>
              <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-md">
                <Download className="w-4 h-4" />
                <span className="text-sm">Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile List View */}
      <div className="md:hidden space-y-4">
        {ringtones.map((tone) => (
          <div
            key={tone.id}
            className="bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-100 hover:border-pink-200 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              {/* Play Button */}
              <button
                onClick={() => togglePlay(tone.id)}
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full flex items-center justify-center text-white transition-all duration-300 flex-shrink-0"
              >
                {currentPlaying === tone.id ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0 mr-3">
                    <h5 className="font-bold text-lg text-gray-800 truncate">
                      {tone.title}
                    </h5>
                    <p className="text-gray-600 text-sm">by {tone.artist}</p>
                    <p className="text-gray-500 text-xs">
                      Uploaded by {tone.uploader}
                    </p>
                  </div>

                  <div className="flex flex-col items-end space-y-2 flex-shrink-0">
                    <button
                      onClick={() => toggleFavorite(tone.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.has(tone.id)
                            ? "fill-current text-red-500"
                            : ""
                        }`}
                      />
                    </button>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                        tone.category
                      )}`}
                    >
                      {tone.category}
                    </span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">
                        {tone.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {tone.downloads}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-lg text-xs font-medium border border-orange-200">
                      {tone.duration}
                    </span>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-xs font-medium border border-green-200">
                      {tone.size}
                    </span>
                  </div>
                </div>

                {/* Download Button */}
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Download Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRingtones;

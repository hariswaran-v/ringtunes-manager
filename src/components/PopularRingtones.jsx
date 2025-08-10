import React from "react";
import { FaPlay, FaDownload } from "react-icons/fa";

const PopularRingtones = () => {
  const ringtones = [
    {
      id: 1,
      title: "Shape of You",
      artist: "Ed Sheeran",
      duration: "0:30",
      category: "Pop",
      uploader: "MusicLover",
      size: "1.2MB",
      downloads: "300+",
    },
    {
      id: 2,
      title: "Believer",
      artist: "Imagine Dragons",
      duration: "0:28",
      category: "Rock",
      uploader: "RockFan",
      size: "1.1MB",
      downloads: "250+",
    },
    {
      id: 3,
      title: "Levitating",
      artist: "Dua Lipa",
      duration: "0:32",
      category: "Pop",
      uploader: "PopStar",
      size: "1.3MB",
      downloads: "280+",
    },
    {
      id: 4,
      title: "Blinding Lights",
      artist: "The Weeknd",
      duration: "0:27",
      category: "Pop",
      uploader: "TuneMaster",
      size: "1.0MB",
      downloads: "320+",
    },
  ];

  return (
    <section className="mx-6 mt-3">
      <h4 className="font-semibold text-lg">Popular Ringtones</h4>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {ringtones.map((tone) => (
          <div key={tone.id} className="bg-gray-300 rounded p-5 mt-3">
            <div className="flex space-x-4">
              {/* Left Content */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  className="text-rose-500"
                >
                  <path
                    fill="currentColor"
                    d="m10 16l6-4l-6-4zm2 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-1.075.225-2.113t.65-2.012l1.55 1.55q-.2.65-.312 1.287T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12t-2.325-5.675T12 4q-.675 0-1.312.112t-1.263.313L7.9 2.9q1-.45 2-.675T12 2q2.075 0 3.9.787t3.175 2.138T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22M5.5 7q-.625 0-1.062-.437T4 5.5t.438-1.062T5.5 4t1.063.438T7 5.5t-.437 1.063T5.5 7m6.5 5"
                  />
                </svg>
              </div>
              {/* Right Content */}
              <div className="space-y-2 flex-1 relative">
                <span className="absolute right-0 bg-green-300 px-3 py-2 text-xs font-semibold uppercase rounded">
                  {tone.category}
                </span>
                <h4 className="font-semibold">{tone.title}</h4>
                <small>Uploaded by {tone.uploader}</small>
                <p className="text-xs">
                  Music:{" "}
                  <a href="#" className="hover:text-rose-600">
                    {tone.artist}
                  </a>
                </p>
                <div className="pt-1 flex space-x-2">
                  <span className="bg-rose-300 px-2 py-1 rounded uppercase text-sm font-medium">
                    {tone.duration}
                  </span>
                  <span className="bg-rose-300 px-2 py-1 rounded uppercase text-sm font-medium">
                    {tone.size}
                  </span>
                  <span className="bg-rose-300 px-2 py-1 rounded uppercase text-sm font-medium">
                    {tone.downloads}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-rose-500 hover:bg-rose-600 px-4 py-1 rounded text-white font-semibold flex items-center justify-center gap-2">
                <FaPlay size={16} /> Play
              </button>
              <button className="flex-1 bg-green-500 hover:bg-green-600 px-4 py-1 rounded text-white font-semibold flex items-center justify-center gap-2">
                <FaDownload size={16} /> Download Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRingtones;

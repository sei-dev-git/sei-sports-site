// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-700">SEI SPORTS</div>
          <ul className="flex gap-6 font-medium text-gray-700">
            <li><a href="#">Home</a></li>
            <li><a href="#">Leagues</a></li>
            <li><a href="#">Fixtures</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to SEI SPORTS
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Your digital home for online soccer leagues, talent discovery, and interactive fan engagement.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-200 transition">
          Join the Movement
        </button>
      </header>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white mt-10">
        &copy; {new Date().getFullYear()} SEI SPORTS. All rights reserved.
      </footer>
    </div>
  );
}

export default App;


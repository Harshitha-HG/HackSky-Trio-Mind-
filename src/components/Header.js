import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-700 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/images/logo.jpg" alt="Logo" className="ml-4 md:ml-28 h-9" />
        <img src="/images/text.png" alt="Second Logo" className="ml-4 h-9" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-5 items-center">
        <a href="#home" className="text-orange-400">Home</a>
        <a href="#services" className="hover:text-orange-400">Features</a>
        <div className="relative group">
          <a href="#about" className="hover:text-orange-400">Trends</a>
        </div>
        <a href="#projects" className="hover:text-orange-400">Education</a>
        <a href="#blog" className="hover:text-orange-400">About</a>
        <button className="border-2 border-green-300 bg-green-300 text-gray-700 hover:bg-orange-600 hover:text-white focus:bg-orange-600 py-1 px-2 rounded-3xl">
              Login/Register
            </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden px-2 py-1 border rounded text-gray-700 border-gray-300"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-start p-4 space-y-2">
            <a href="#home" className="text-orange-400">Home</a>
            <a href="#services" className="hover:text-orange-400">Features</a>
            <div>
              <a href="#about" className="hover:text-orange-400">Trends</a>
            </div>
            <a href="#projects" className="hover:text-orange-400">Education</a>
            <a href="#blog" className="hover:text-orange-400">About</a>
            <a href="#careers" className="hover:text-green-400">Login/Register</a>
           
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

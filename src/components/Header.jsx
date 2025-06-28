import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="top-0 z-50 bg-[#14191a] text-white sticky">
      <div className="w-full px-6 py-0.5 flex items-center justify-between gap-6">
        
      <p className="text-2xl leading-tight mt-2" style={{ fontFamily: 'Rosarivo, serif' }}>
      Blossom<br />Books
      </p>
        <SearchBar />

        <nav className="space-x-6 font-medium text-base" style={{ fontFamily: 'Rosarivo, serif' }}>
          <Link to="/" className="!text-white hover:!text-[#c5c1c1] no-underline transition-colors duration-300">Home</Link>
          <Link to="/about" className="!text-white hover:!text-[#c5c1c1] no-underline transition-colors duration-300">About</Link>
          <Link to="/contact" className="!text-white hover:!text-[#c5c1c1] no-underline transition-colors duration-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

function Background({ image }) {
  return (
    <div
      className="relative w-full lg:w-1/2 h-screen bg-cover bg-top"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <Link
        to="/"
        className="absolute top-4 right-4 text-white px-3 py-1 rounded-lg text-sm shadow "
      >
        Home
      </Link>
    </div>
  );
}

export default Background;

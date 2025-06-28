import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q') || '';
    setQuery(q);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[400px] relative" style={{ fontFamily: 'Lora, serif' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books..."
        className="w-full px-4 py-2 pr-10 rounded-3xl bg-white bg-opacity-50 text-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white "
      />
      <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-sm pointer-events-none" />
    </form>
  );
};

export default SearchBar;

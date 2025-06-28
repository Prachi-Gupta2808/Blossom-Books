import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../components/Background';
import Form from '../components/Form';

function About() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/contact');
    }, 700);
  };

  const slideClass = isAnimating
    ? '-translate-x-full opacity-0'
    : 'translate-x-0 opacity-100';

  return (
    <div className="w-full h-screen overflow-hidden bg-[#8ea074]/80">
      <div
        className={`transition-all duration-700 ease-in-out transform flex flex-col lg:flex-row w-full h-full ${slideClass}`}
      >
        <Background image="/bg-about.png" />
        <Form onFlip={handleFlip} isAbout />
      </div>
    </div>
  );
}

export default About;

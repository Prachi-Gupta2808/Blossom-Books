import React, { useEffect, useState } from "react";

const SplashScreen = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHidden(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
    className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50 pointer-events-none transition-opacity duration-1000 ${
    hidden ? "opacity-0" : "opacity-100"
      } bg-[#14191a]`}
    >
      <h1 className="text-6xl md:text-8xl font-serif font-bold text-white">
        Blossom Books
      </h1>
    </div>
  );
};

export default SplashScreen;

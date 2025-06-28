import React from "react";
import Magnet from "./Magnet";

const QuoteOne = ({ image, quote, author }) => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-row justify-between items-center gap-10 p-6 bg-[#495f68]/20 mb-3">
      <div className="flex-1 text-lg text-[#1e1e1e] pr-6">
        <p style={{ fontFamily: 'Lora, serif' }}>{quote}</p>
        <p className="font-bold mt-2" style={{ fontFamily: 'Lora, serif' }}>{author}</p>
      </div>

      <Magnet padding={200} magnetStrength={10} movementMultiplier={2}>
        <img
          src={image}
          alt="quote"
          className="w-72 h-64 object-cover rounded-lg shadow-md shadow-neutral-500 transition-transform duration-300"
        />
      </Magnet>
    </div>
  );
};

export default QuoteOne;

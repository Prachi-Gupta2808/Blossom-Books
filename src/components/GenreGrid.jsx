import React from 'react';
import { useNavigate } from 'react-router-dom';
import TiltedCard from '../components/TiltedCard';

const genres = [
  'Fantasy', 'Dystopian', 'Romance', 'Education',
  'Sci-Fi', 'Self-Help', 'Horror', 'Mystery'
];

const GenreGrid = () => {
  const navigate = useNavigate();

  const handleGenreClick = (genre) => {
    navigate(`/search?q=${encodeURIComponent(genre)}`);
  };

  return (
    <div className="px-6 py-12">
      <h2
        className="text-3xl font-semibold text-center mt-5 mb-8 text-[#4a3f35]"
        style={{ fontFamily: 'Rosarivo, serif' }}
        data-aos="fade-up"
      >
        Explore & Read
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {genres.map((genre, i) => (
          <div
            key={i}
            onClick={() => handleGenreClick(genre)}
            className="flex flex-col items-center cursor-pointer group"
            data-aos="zoom-in-up"
            data-aos-delay={i * 100}
          >
            <TiltedCard
              imageSrc={`/grid${i + 1}.jpeg`}
              altText={genre}
              captionText={genre}
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <p
                  className="text-xl text-white drop-shadow"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  {genre}
                </p>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreGrid;

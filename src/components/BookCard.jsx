import React from 'react';
import { Link } from 'react-router-dom';
import TiltedCard from './TiltedCard'; // adjust path if needed

function BookCard({ book }) {
  const getCleanTitle = (title = '') => {
    return title.split(/[:\-]/)[0].trim();
  };

  const getFirstAuthor = (author = '') => {
    return author.split(',')[0].trim();
  };

  const title = getCleanTitle(book?.title);
  const author = getFirstAuthor(book?.author);
  const imageSrc = book?.image || 'https://via.placeholder.com/128x193?text=No+Cover';

  return (
    <Link to={`/book/${book.id}`}>
      <div className="flex flex-col items-center bg-[#6c8e88]/30 pt-5 hover:bg-[#6c8e88]/40 transition rounded cursor-pointer">
        <div className="w-[128px] h-[193px]">
          <TiltedCard
            imageSrc={imageSrc}
            altText={title}
            captionText={title}
            containerHeight="193px"
            containerWidth="128px"
            imageHeight="193px"
            imageWidth="128px"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
          />
        </div>

        {/* Book Details */}
        <div className="mt-2 text-center w-[128px]">
          <p
            className="text-base font-bold text-[#2e3e4b] truncate whitespace-nowrap overflow-hidden"
            title={book?.title}
            style={{ fontFamily: 'Lora, serif' }}
          >
            {title || 'Untitled'}
          </p>
          <p className="text-base text-white leading-tight whitespace-nowrap" style={{ fontFamily: 'Lora, serif' }}>
            {author || 'Unknown Author'}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;

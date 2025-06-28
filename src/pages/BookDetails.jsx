import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TiltedCard from '../components/TiltedCard';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
        );
        const data = await res.json();
        const info = data.volumeInfo;

        setBook({
          title: info.title,
          author: info.authors?.join(', ') || 'Unknown Author',
          description: info.description || 'No description available.',
          image:
            info.imageLinks?.thumbnail ||
            info.imageLinks?.smallThumbnail ||
            'https://via.placeholder.com/128x193?text=No+Cover',
          rating: info.averageRating || 'N/A',
          buyLink: data.saleInfo?.buyLink || info.infoLink || '',
        });
      } catch (err) {
        console.error('Failed to load book details', err);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return (
      <div className="min-h-screen bg-[#f3f7f1] flex items-center justify-center text-[#4a3f35] text-lg">
        Loading book details...
      </div>
    );
  }

  const displayRating = book.rating === 'N/A' ? '4/5' : `${book.rating}/5`;

  return (
    <div className="min-h-screen bg-white px-4 py-5 text-[#2e3e4b] flex flex-col items-center">
      
      {/* Tilted Book Cover */}
      <div
        className="w-[160px] h-[240px] mb-4"
        data-aos="zoom-in"
      >
        <TiltedCard
          imageSrc={book.image}
          altText={book.title}
          captionText={book.title}
          containerHeight="240px"
          containerWidth="160px"
          imageHeight="240px"
          imageWidth="160px"
          rotateAmplitude={10}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
        />
      </div>

      <div
        className="text-center mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-2xl font-bold" style={{ fontFamily: 'Rosarivo, serif' }}>
          {book.title}
        </h2>
        <p className="text-base text-[#495f68]/80 font-medium">{book.author}</p>
      </div>

      {/* Themed Description Section Only */}
      <div
        className="max-w-3xl w-full text-left py-4 px-4 bg-[#6c8e88]/40"
        style={{ fontFamily: 'Lora, serif' }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p
          className="text-sm text-[#232e33] mb-4"
          dangerouslySetInnerHTML={{ __html: book.description }}
        ></p>

        <p
          className="text-sm text-white mb-4"
          data-aos="fade"
          data-aos-delay="300"
        >
          ⭐ {displayRating}
        </p>
      </div>

      <a
        href={book.buyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#58a8f3] text-white px-4 py-2 rounded font-semibold hover:bg-[#BDE0FE] transition mt-3"
        style={{ fontFamily: 'Lora, serif' }}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Buy Now
      </a>
    </div>
  );
};

export default BookDetails;

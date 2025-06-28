import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Puff } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';
import BookCard from '../components/BookCard';
import BookService from '../services/BookService';

const MAX_RESULTS_PER_PAGE = 20;

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').toLowerCase().trim();
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [books]);

  useEffect(() => {
    setBooks([]);
    setStartIndex(0);
    setHasMore(true);
  }, [query]);

  useEffect(() => {
    if (!query) return;

    const fetchBooks = async () => {
      setLoading(true);

      const newBooks = await BookService.searchBooks(query, startIndex, MAX_RESULTS_PER_PAGE);

      const uniqueBooks = [
        ...new Map([...books, ...newBooks].map((b) => [b.id, b])).values(),
      ];

      setBooks(uniqueBooks);
      setHasMore(newBooks.length === MAX_RESULTS_PER_PAGE);
      setLoading(false);
    };

    fetchBooks();
  }, [query, startIndex]);

  const lastBookRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setStartIndex((prev) => prev + MAX_RESULTS_PER_PAGE);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="px-6 py-10 min-h-screen bg-[#f3f7f1] text-[#4a3f35]">
      {!loading && books.length === 0 && startIndex === 0 && (
        <p className="text-lg text-[#5e7560]" style={{ fontFamily: 'Lora, serif' }}>
          No similar books found, check your search once!
        </p>
      )}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {books.map((book, index) => (
          <div
            key={book.id}
            ref={index === books.length - 1 ? lastBookRef : null}
            className={index === books.length - 1 ? 'min-h-[250px]' : ''}
            data-aos="fade-up"
            data-aos-delay={(index * 50) % 500}
          >
            <BookCard book={book} />
          </div>
        ))}
      </div>

      {loading && books.length === 0 && (
        <div className="fixed inset-0 flex justify-center items-center bg-[#f3f7f1] z-50">
          <Puff
            visible={true}
            height={80}
            width={80}
            color="#202419"
            ariaLabel="puff-loading"
          />
        </div>
      )}
    </div>
  );
};

export default SearchResults;

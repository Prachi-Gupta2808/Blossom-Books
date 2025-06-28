const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

const BookService = {
  async searchBooks(query, startIndex = 0, maxResults = 20) {
    try {
      const cleanQuery = query.trim();
      const searchTerm = encodeURIComponent(cleanQuery);

      const response = await fetch(
        `${BASE_URL}?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}&key=${API_KEY}`
      );

      const data = await response.json();
      const currentYear = new Date().getFullYear();

      const books = (data.items || [])
        .filter((item) => {
          const info = item.volumeInfo;
          const pubDate = info.publishedDate;

          if (!pubDate || !info.imageLinks?.thumbnail) return false;

          const pubYear = parseInt(pubDate.substring(0, 4));
          return !isNaN(pubYear) && currentYear - pubYear <= 20;
        })
        .map((item) => {
          const info = item.volumeInfo;
          return {
            id: item.id,
            title: info.title,
            author: info.authors?.join(', ') || 'Unknown Author',
            image: info.imageLinks.thumbnail,
            description: info.description,
            publisher: info.publisher,
            publishedDate: info.publishedDate,
            rating: info.averageRating || null,
            ratingsCount: info.ratingsCount || 0,
          };
        });

      books.sort((a, b) => {
        const aDate = new Date(a.publishedDate);
        const bDate = new Date(b.publishedDate);
        return bDate - aDate;
      });

      return books;
    } catch (error) {
      console.error('Failed to fetch books:', error);
      return [];
    }
  }
};

export default BookService;

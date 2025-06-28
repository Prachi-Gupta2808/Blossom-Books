import AOS from 'aos'; // ✅ Import AOS
import 'aos/dist/aos.css'; // ✅ Import AOS styles
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import Chatbot from './components/Chatbot/Chatbot';
import Layout from './Layout';
import About from './pages/About';
import BookDetails from './pages/BookDetails';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Chatbot />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'search', element: <SearchResult /> },
      { path: 'book/:id', element: <BookDetails /> },
    ],
  },
  { path: '/contact', element: <Contact /> },
  { path: '/about', element: <About /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

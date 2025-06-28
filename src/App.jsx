import React, { useEffect, useState } from 'react';
import { Puff } from 'react-loader-spinner';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#f3f7f1] z-50">
        <Puff
          visible={true}
          height={80}
          width={80}
          color="#202419"
          ariaLabel="site-loading"
        />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h1 className="text-2xl p-4">Hello from Blossom Books!</h1>
      <Footer />
    </div>
  );
}

export default App;

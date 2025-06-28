import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import React from "react";
import GenreGrid from "../components/GenreGrid";
import QuoteSec from "../components/QuoteSection";
import SplashScreen from "../components/SplashScreen";
import InfiniteMovingCardsDemo from "../components/infinite-moving-cards-demo";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#fbfdfb] text-[#4a3f35]">
      <SplashScreen />
      <div className="w-full h-[500px]">
        <MDBCarousel showControls showIndicators touch={false} className="h-full">
          <MDBCarouselItem itemId={1}>
            <img src="/bg-home.png" className="w-full h-[600px] object-cover" alt="Slide 1" />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src="/carou.jpg" className="w-full h-[600px] object-cover" alt="Slide 2" />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src="/carou2.jpg" className="w-full h-[600px] object-cover" alt="Slide 3" />
          </MDBCarouselItem>
        </MDBCarousel>
      </div>

      {/* Genre Grid */}
      <div className="mt-12" data-aos="fade-up" data-aos-delay="100">
        <GenreGrid />
      </div>

      {/* Quotes Section */}
      <div className="mb-2" data-aos="fade-up" data-aos-delay="200">
        <QuoteSec />
      </div>

      {/* Review Section*/}
      <div className="mb-8" data-aos="fade-up" data-aos-delay="300">
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default Home;

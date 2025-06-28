import React from "react";
import QuoteOne from "./QuoteOne";
import QuoteTwo from "./QuoteTwo";

const QuoteSec = () => {
    return (
    <div>
        <div>
        <h2 className="text-3xl font-semibold text-center mt-10 mb-8 text-[#4a3f35] hover:text-[#6a5f54]" style={{ fontFamily: 'Rosarivo, serif' }}>
            Quotes to flood-up your hearts!
        </h2>
        </div>

        <div className="max-w-6xl mx-auto">
            <QuoteOne
            image="/q1.jpeg"
            quote="Hug me as if I were to die tomorrow, and hug me tomorrow as if I were back from the dead"
            author="- Nizar Qabbani"
            />
            <QuoteTwo
            image="/q2.jpeg"
            quote="Abuse can feel like love. Starving people will eat anything"
            author="- Penelope Douglas"
            />
            <QuoteOne
            image ="/q3.jpeg"
            quote="They asked “Do you love her to death?” I said “speak of her over my grave and watch how she brings me back to life”"
            author="- Mahmoud Darwish"
            />
            <QuoteTwo
            image="/q4.jpeg"
            quote="Of all the ways to loose a person, death is the kindest"
            author="- Ralph Emerson"
            />
            <QuoteOne
            image="/q5.jpeg"
            quote="I wrote endless letters to you in my mind, oh I wish you were a little kind"
            author="- Unknown"
            />
        </div>
    </div>
    );
};

export default QuoteSec;

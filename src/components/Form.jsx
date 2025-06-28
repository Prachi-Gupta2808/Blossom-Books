import React from 'react';

function Form({onFlip,isAbout= false }) {
  return (
    <div className="lg:w-1/2 w-full py-10 px-6 lg:px-20 flex items-center">
      <div className="w-full max-w-md bg-white/60 p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-600 mb-3" style={{ fontFamily: 'Lora, serif' }}>
          {isAbout
            ? "We're a passionate book-loving team!"
            : "Submit your E-mail and our team will reach out to you!"}
        </h2>
        <p className="text-gray-600 mb-4" style={{ fontFamily: 'Lora, serif' }}>
          {isAbout ? "Want to reach out?" : "Want to know about us?"}{' '}
          <button
            onClick={onFlip}
            className="text-white hover:underline"
            style={{ fontFamily: 'Lora, serif' }}
          >
            Click here
          </button>
        </p>
        {isAbout && (
            <p className="text-gray-600 mb-4" style={{ fontFamily: 'Lora, serif' }}>At Blossom Books, we believe every great story deserves to be discovered.
            Our platform helps you explore top-rated books by genre, author, and more.
            Whether you're a casual reader or a bookworm, there's something for everyone.
            Join us in celebrating the joy of reading — one book at a time. 📚✨</p>
        )}
        {!isAbout && (
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ea074]"
                style={{ fontFamily: 'Lora, serif' }}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ea074]"
                placeholder="Enter Email Address"
                style={{ fontFamily: 'Lora, serif' }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-1.5 px-3 bg-[#5e7560] text-white hover:bg-[#8ea074] transition duration-200"
              style={{ fontFamily: 'Lora, serif' }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Form;

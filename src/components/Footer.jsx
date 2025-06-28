import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
    <footer className="relative h-80 text-white overflow-hidden">
        <img
        src="/bg-footer.jpeg"
        alt="Footer Design"
        className="absolute inset-0 w-full h-full object-cover object-[0%_20%] z-0"/>

        <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 pt-8">
            <h2 className="text-2xl font-bold ml-8" style={{ fontFamily: 'Rosarivo, serif' }}>Blossom Books</h2>
            <p className="mt-2 text-sm ml-8" style={{ fontFamily: 'Lora, serif' }}>Your gateway to beautiful stories</p>
            <div className="mt-16">
                <ul className="flex gap-4 text-white" style={{ fontFamily: 'Rosarivo, serif' }}>
                    <li><Link to="/" className="hover:underline text-white">Home</Link></li>
                    <li>|</li>
                    <li><Link to="/about" className="hover:underline text-white">About</Link></li>
                    <li>|</li>
                    <li><Link to="/contact" className="hover:underline text-white"> Contact</Link></li>
                </ul>
            </div>
            <p className="mt-5 text-xs ml-10 " style={{ fontFamily: 'Lora, serif' }}>&copy; 2025 Blossom Books. All rights reserved.</p>
        </div>
    </footer>
    );
};

export default Footer;

// components/Header.js
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      {/* Mobile nav toggle button */}
      <i className="bx bx-list mobile-nav-toggle d-xl-none"></i>

      {/* Header */}
      <header id="header" className="fixed top-0 left-0 bottom-0 w-72 bg-gray-900 text-white overflow-y-auto z-50">
        <div className="flex flex-col items-center">
          <div className="profile my-4 text-center">
            <Image
              src="/assets/img/5E4A0180.jpg"
              alt="Zunair Shahid"
              width={120}
              height={120}
              className="rounded-full border-8 border-gray-700"
            />
            <h1 className="text-2xl font-bold mt-2">
              <a href="index.html" className="text-white no-underline hover:underline">
                Zunair Shahid
              </a>
            </h1>
            <div className="social-links mt-3 flex justify-center space-x-2">
              <a href="https://www.linkedin.com/in/zunair-shahid/" target="_blank" className="bg-gray-800 text-white p-2 rounded-full hover:bg-blue-500">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com/zzunair/" target="_blank" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://www.facebook.com/ZzunairShahid/" target="_blank" className="bg-gray-800 text-white p-2 rounded-full hover:bg-blue-700">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://www.instagram.com/zuniors_lens/" target="_blank" className="bg-gray-800 text-white p-2 rounded-full hover:bg-pink-500">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://twitter.com/zunair_says" target="_blank" className="bg-gray-800 text-white p-2 rounded-full hover:bg-blue-400">
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
          </div>
          <nav id="navbar" className="nav-menu w-full">
            <ul className="flex flex-col items-center space-y-2">
              <li><a href="#hero" className="nav-link scrollto active flex items-center p-3 hover:text-blue-400"><i className="bx bx-home text-2xl pr-2"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto flex items-center p-3 hover:text-blue-400"><i className="bx bx-user text-2xl pr-2"></i> <span>About</span></a></li>
              <li><a href="#resume" className="nav-link scrollto flex items-center p-3 hover:text-blue-400"><i className="bx bx-file-blank text-2xl pr-2"></i> <span>Resume</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto flex items-center p-3 hover:text-blue-400"><i className="bx bx-book-content text-2xl pr-2"></i> <span>Portfolio</span></a></li>
              <li><a href="#services" className="nav-link scrollto flex items-center p-3 hover:text-blue-400"><i className="bx bx-server text-2xl pr-2"></i> <span>Services</span></a></li>
              <li><a href="#contact" className="nav-link scrollto flex items-center p-3 hover:text-blue-400"><i className="bx bx-envelope text-2xl pr-2"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

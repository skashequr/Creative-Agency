import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Geallary = () => {
    const {user , lodding} = useContext(AuthContext)
    if (lodding) {
      return <div className="flex justify-center items-center mt-36"><span className="loading loading-ring text-[#543E93]  h-80 w-80 loading-xs"></span></div>
  }
    if (!user) {
        return <Navigate to="/login"></Navigate>
    }
    return (
        <div>
            <div className="carousel h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qgh40hs/artists-performing-on-stage.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/6chDx7m/sciencefair.webp" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/VTTG9Dj/celop-japan3-e1449690950124.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/0Zk3q0g/5dbf7da3a310cf3e97a4200f.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">
              Our Porgrammes is frendy
              <br className="hidden md:block" />
              because we are frendly.
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="text-gray-700 lg:text-sm lg:max-w-md">
          High-quality images and videos from various events you've managed.
    Consider creating separate albums or categories for different types of events (e.g., weddings, corporate events, conferences, parties).
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <Link aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/jTy8qdR/1675239939-59d84b4dcf60eadb362c97c2cca80bab.webp"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Book Fair</p>
                <p className="text-sm tracking-wide text-gray-300">
                "The Book Fair organized by Creative Agency was a literary paradise. I had the opportunity to meet my favorite author and discover new books that I fell in love with. It was an unforgettable experience." - [Zarif]
                </p>
              </div>
            </div>
          </Link>
          <Link  aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/pQdCGYH/Untitled.jpg"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                 Science Fair
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                "The Science Fair organized by Creative Agency was an awe-inspiring experience. I was amazed by the creativity and knowledge displayed by the young participants. It's a must-visit event for anyone interested in science." - Tusher
                </p>
              </div>
            </div>
          </Link>
          <Link  aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/y5R8fpc/code.jpg"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Codding Camp</p>
                <p className="text-sm tracking-wide text-gray-300">
                "My child attended the Coding Camp organized by Creative Agency, and I was amazed at their growth in coding skills and confidence. It's a fantastic learning opportunity for young minds." - Rayhan
                </p>
              </div>
            </div>
          </Link>
          <Link  aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                Art Exhibition
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                "The Art Exhibition Showcase by Creative Agency was a visual delight. It's a true celebration of art in all its forms. I left with a newfound appreciation for creativity." - Ambappy
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-center">
          <Link
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            View More
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default Geallary;


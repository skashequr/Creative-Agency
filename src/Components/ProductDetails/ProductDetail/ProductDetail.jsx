import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({data}) => {
    console.log(data)
    const x = useParams(data)
    console.log(x)
    return (
        <div>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Creative Agency
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            Why Book Our STEM Expo Event?
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
              <div className="rating gap-1">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" checked  />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"  />
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a className="text-gray-500">
                  {/* Add to cart button */}
                  {/* social icone */}
                  
                </a>
                <a className="ml-2 text-gray-500">
                  {/* Toggle product details button */}
                  {/* ... */}
                </a>
              </span>
            </div>
            <p className="leading-relaxed">
              {/* Product description */}
              {/* ... */}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {/* Color options */}
                {/* ... */}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  {/* Size selection */}
                  {/* ... */}
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Booking It
                {/* ... */}
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                {/* Toggle product details button */}
                {/* ... */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ProductDetail;
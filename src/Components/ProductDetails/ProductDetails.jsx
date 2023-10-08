import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetail from './ProductDetail/ProductDetail';

const ProductDetails = () => {
     const data = useLoaderData()
    //  console.log(data)
  return (
    <div>
        <ProductDetail data={data}></ProductDetail>
    </div>
  );
};

export default ProductDetails;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(Error(err)));
      console.log(response)
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);
  return (
    <div>
      <h1>ProductDetail</h1>
    </div>
  );
};

export default ProductDetail;

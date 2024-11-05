import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRating from "./StarRating";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchShop = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };
    fetchShop();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-container">
      <div className="product-details">
        <h1>{product.title}</h1>
      </div>
      <img src={product.image} alt={product.title} className="product-image" />
      <p>Description: {product.description}</p>
      <p className="product-price">Price: {product.price}</p>
      <StarRating rating={Math.round(product.rating)} />
      <Link to="/products" className="back-button">
        Back to Products
      </Link>
    </div>
  );
}

export default ProductDetail;

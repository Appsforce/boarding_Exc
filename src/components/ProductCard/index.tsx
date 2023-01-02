import React from "react";

interface ProductCardProps {
  name: string;
  brand: string;
  productImage?: { url: string };
  price: number;
  id: string;
}

export const ProductCard = ({
  name,
  brand,
  price,
  id,
  productImage,
}: ProductCardProps) => {
  return (
    <div key={id}>
      <p>{name}</p>
      <p>{brand}</p>
      <p>{price}$</p>
      {productImage && <p>{productImage.url}</p>}
    </div>
  );
};

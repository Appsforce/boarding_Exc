import React from "react";

interface ProductCardProps {
  name: string;
  brand: string;
  image?: string;
  price: number;
}

export const ProductCard = ({
  name,
  brand,
  price,
  image,
}: ProductCardProps) => {
  return (
    <div>
      <p>{name}</p>
      <p>{brand}</p>
      <p>{price}$</p>
      <img src={image} />
    </div>
  );
};

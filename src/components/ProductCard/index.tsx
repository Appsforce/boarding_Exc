import React from "react";
import { Product } from "shared/models";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.brand}</p>
      <p>{product.price}$</p>
      <img src={product.image} />
    </div>
  );
};

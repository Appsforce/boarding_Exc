import React from "react";

interface ProductCard_props {
  name: string;
  brand: string;
  product_image?: { url: string };
  price: number;
  id: number;
}

export const ProductCard = ({
  name,
  brand,
  price,
  id,
  product_image,
}: ProductCard_props) => {
  <div className="card_cont">
    <p>{name}</p>
    <p>{brand}</p>
    <p>{price}$</p>
    <p>{id}</p>
    {product_image && <p>{product_image.url}</p>}
  </div>;
};

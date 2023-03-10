import { Brand } from "shared/models";

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  image: string;
  price: number;
}

export type CreateProduct = Omit<Product, "id">;

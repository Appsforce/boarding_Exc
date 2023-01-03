export interface Product {
  id: string;
  name: string;
  brand: string;
  image?: string;
  price: number;
}

export type CreateProduct = Omit<Product, "id">;

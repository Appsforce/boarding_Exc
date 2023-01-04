import { Products } from "../data";
import { CreateProduct, Product } from "shared/models";

class ProductService {
  getAllProducts() {
    return Products;
  }
  editProductsList(editDetails: Product, id: string) {
    const selectedProduct = Products.find((product) => id === product.id);
    if (!selectedProduct) {
      throw new Error("No product found");
    }
    Object.assign(selectedProduct, editDetails);
    return selectedProduct;
  }
  deleteProduct(id: string) {
    const foundProduct = Products.find((product) => product.id !== id);
    if (foundProduct) {
      return true;
    } else {
      throw new Error("No product found");
    }
  }
  addProduct(product: CreateProduct) {
    const newProduct = {
      ...product,
      id: Math.floor(Math.random() * 10000).toString(),
    };
    return newProduct;
  }
}
export default new ProductService();

import { Products } from "../data";
import { CreateProduct, Product } from "shared/models";

class ProductService {
  getAllProducts() {
    return Products;
  }
  editProductsList(editDetails: Product) {
    const selectedProduct = Products.find(
      (product) => editDetails.id === product.id
    );
    if (!selectedProduct) {
      throw new Error("No product found");
    }
    Object.assign(selectedProduct, editDetails);
    return selectedProduct;
  }
  deleteProduct(id: string) {
    const oldArrayLength = Products.length;
    Products.filter((product) => product.id !== id);
    if (Products.length < oldArrayLength) {
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

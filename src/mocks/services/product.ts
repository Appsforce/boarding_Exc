import { Products } from "../data";
import { CreateProduct, Product } from "shared/models";

class ProductService {
  getAllProducts() {
    return Products;
  }
  editProductsList(editDetails: Product) {
    let choosenProduct: Product | undefined = Products.find(
      (product) => editDetails.id === product.id
    );
    if (!choosenProduct) {
      throw new Error("No product found");
    }
    Object.assign(choosenProduct, editDetails);
    return choosenProduct;
  }
  deleteProduct(id: string) {
    const newProducts = Products.filter((product) => product.id !== id);
    if (newProducts.length < Products.length) {
      return true;
    } else {
      throw new Error("No product found");
    }
  }
  addProduct(product: CreateProduct) {
    let new_product = {
      ...product,
      id: Math.floor(Math.random() * 10000).toString(),
    };
    return new_product;
  }
}
export default new ProductService();

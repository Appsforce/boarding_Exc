import { rest } from "msw";
import { productController } from "mocks/controllers";

export const handlers = [
  rest.get("/products/all", productController.getAll),
  rest.delete("/products/delete", productController.deleteProduct),
  rest.put("/products/edit", productController.editProduct),
  rest.post("/products/add", productController.addProduct),
];

import { rest } from "msw";
import { productController } from "mocks/controllers";
import { getAPIUrls } from "shared/constants";

export const handlers = [
  rest.get(getAPIUrls().product.getAll, productController.getAll),
  rest.delete(
    getAPIUrls(":id").product.delete,
    productController.deleteProduct
  ),
  rest.put(getAPIUrls(":id").product.edit, productController.editProduct),
  rest.post(getAPIUrls().product.create, productController.addProduct),
];

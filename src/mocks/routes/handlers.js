import { rest } from "msw";
import { productController } from "mocks/controllers";
import { getAPIUrls } from "shared/constants";
import { prefix } from "shared/utils";

const urls = getAPIUrls(":id");

export const handlers = [
  rest.get(prefix(urls.product.getAll, getAPIUrls.getAll)),
  rest.delete(prefix(urls.product.delete, productController.deleteProduct)),
  rest.put(prefix(urls.product.edit, productController.editProduct)),
  rest.post(prefix(urls.product.add, productController.addProduct)),
];

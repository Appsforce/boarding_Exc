import { RestRequest, RestContext, ResponseFunction } from "msw";
import ProductService from "mocks/services/product";
import { Product, CreateProduct } from "shared/models";

interface Error {
  message: string;
}

export class productController {
  static getAll(
    req: null,
    res: ResponseFunction<Product[] | Error>,
    ctx: RestContext
  ) {
    try {
      const products = ProductService.getAllProducts();
      return res(ctx.status(200), ctx.json(products));
    } catch (err: any) {
      res(ctx.status(400), ctx.json({ message: err.message }));
    }
  }
  static async editProduct(
    req: RestRequest<Product>,
    res: ResponseFunction<Product | Error | any>,
    ctx: RestContext
  ) {
    try {
      const reqData: Product = await req.json();
      return res(
        ctx.status(200),
        ctx.json(ProductService.editProductsList(reqData))
      );
    } catch (err: any) {
      res(ctx.status(400), ctx.json({ message: err.message }));
    }
  }
  static async deleteProduct(
    req: RestRequest<{ id: string }>,
    res: ResponseFunction<boolean | Error>,
    ctx: RestContext
  ) {
    try {
      const reqBody = await req.json();
      return res(
        ctx.status(200),
        ctx.json(ProductService.deleteProduct(reqBody.id))
      );
    } catch (err: any) {
      res(ctx.status(400), ctx.json({ message: err.message }));
    }
  }
  static async addProduct(
    req: RestRequest<CreateProduct>,
    res: ResponseFunction<Product | Error>,
    ctx: RestContext
  ) {
    try {
      const reqBody = await req.json();
      return res(ctx.status(200), ctx.json(ProductService.addProduct(reqBody)));
    } catch (err: any) {
      res(ctx.status(400), ctx.json({ message: err.message }));
    }
  }
}

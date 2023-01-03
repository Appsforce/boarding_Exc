import { rest } from "msw";
import { Products } from "../data";

export const handlers = [
  rest.get("/products/all", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Products));
  }),
];

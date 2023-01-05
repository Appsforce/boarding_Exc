import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, CreateProduct } from "shared/models";

export const productSlice = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
    }),
    createPost: builder.mutation<CreateProduct, Product>({
      query: (productDetails) => ({
        url: "products",
        method: "POST",
        body: productDetails,
      }),
    }),
    editPost: builder.mutation<Product, Product>({
      query: (productDetails) => ({
        url: `product/${productDetails.id}`,
        method: "PUT",
        body: productDetails,
      }),
    }),
    deletePost: builder.mutation<{ id: string }, void>({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreatePostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = productSlice;

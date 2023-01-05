import { createSlice } from "@reduxjs/toolkit";
import { Product } from "shared/models";

export interface productState {
  products: Product[];
}

const initialState: productState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      [
        state,
        {
          name: "Air Force 1",
          brand: "Nike",
          id: "132",
          image:
            "https://assets.adidas.com/images/w_450,f_auto,q_auto/aa7ed3752a604544abc4af0700b64c91_9366/GW9381_00_plp_standard.jpg",
          price: 100,
        },
      ];
    },
  },
});

export const { increment } = productSlice.actions;
export default productSlice.reducer;

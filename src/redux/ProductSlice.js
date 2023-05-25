import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const url = "https://5fc9346b2af77700165ae514.mockapi.io/products";

  const response = await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return response;
});

export const getDetailProduct = createAsyncThunk("getProduct", async (id) => {
  const url = `https://5fc9346b2af77700165ae514.mockapi.io/products/${id}`;

  const response = await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return response;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      })

      .addCase(getDetailProduct.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
      });
  },
});

export default productsSlice.reducer;

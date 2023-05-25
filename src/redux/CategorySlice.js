import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk("category", async () => {
  const url = "https://5fc9346b2af77700165ae514.mockapi.io/products/";

  const response = await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));

  const brands = [];

  response.forEach((product) => {
    if (!brands.includes(product.brand)) {
      brands.push(product.brand);
    }
  });

  return brands;
});

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;

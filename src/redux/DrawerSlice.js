import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.drawer = true;
    },
    closeDrawer: (state) => {
      state.drawer = false;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;

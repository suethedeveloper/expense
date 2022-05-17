   
import { createSlice } from "@reduxjs/toolkit";

type InitialUiState = {
  cartIsvisible: boolean;
};

const initialState: InitialUiState = { cartIsvisible: false };
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      console.log(state.cartIsvisible);
      state.cartIsvisible = !state.cartIsvisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
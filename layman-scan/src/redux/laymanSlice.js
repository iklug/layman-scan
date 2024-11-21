import { createSlice } from "@reduxjs/toolkit";

export const laymanSlice = createSlice({
  name: "layman",
  initialState: {
    value: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = laymanSlice.actions;

export default laymanSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    value: null,
  },
  reducers: {
    addError: (state, action) => {
      state.value = action.payload;
    },
    clearError: (state, action) => {
      state.value = null;
    },
  },
});

export const { addError, clearError } = errorSlice.actions;
export const selectError = (state) => state.error.value;

export default errorSlice.reducer;

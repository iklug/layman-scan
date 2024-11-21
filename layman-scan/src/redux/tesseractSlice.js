import { createSlice } from "@reduxjs/toolkit";

export const tesseractSlice = createSlice({
  name: "tesseract",
  initialState: {
    value: null,
  },
  reducers: {
    addTesseract: (state, action) => {
      state.value = action.payload;
    },
    clearTesseract: (state, action) => {
      state.value = null;
    },
  },
});

export const { addTesseract, clearTesseract } = tesseractSlice.actions;
export const selectTesseract = (state) => state.tesseract.value;
export default tesseractSlice.reducer;

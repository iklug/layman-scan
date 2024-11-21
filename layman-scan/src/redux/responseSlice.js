import { createSlice } from "@reduxjs/toolkit";

export const responseSlice = createSlice({
  name: "response",
  initialState: {
    value: null,
  },
  reducers: {
    addResponse: (state, action) => {
      state.value = action.payload;
    },
    clearTesseract: (state, action) => {
      state.value = null;
    },
  },
});

export const { addResponse, clearTesseract } = responseSlice.actions;
export const selectResponse = (state) => state.response.value;
export default responseSlice.reducer;

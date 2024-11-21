import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: "display",
  initialState: {
    value: {
      word: "Welcome!",
      definition: "Choose a term to view its definition",
    },
  },
  reducers: {
    addDisplay: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addDisplay } = displaySlice.actions;
export const selectDisplay = (state) => state.display.value;
export default displaySlice.reducer;

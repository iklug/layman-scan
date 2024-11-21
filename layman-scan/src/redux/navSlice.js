import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    value: "home",
  },
  reducers: {
    changeNav: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeNav } = navigationSlice.actions;
export const selectNavigation = (state) => state.navigation.value;
export default navigationSlice.reducer;

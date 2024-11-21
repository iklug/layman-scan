import { createSlice } from "@reduxjs/toolkit";

export const uploadedImageSlice = createSlice({
  name: "uploadedImage",
  initialState: {
    value: null,
  },
  reducers: {
    addFile: (state, action) => {
      state.value = action.payload;
    },
    removeFile: (state, action) => {
      state.value = null;
    },
  },
});

export const { addFile, removeFile } = uploadedImageSlice.actions;
export const selectFile = (state) => state.uploadedImage.value;
export default uploadedImageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    value: [],
  },
  reducers: {
    addCollection: (state, action) => {
      state.value = action.payload;
    },
    deleteCollection: (state, action) => {
      state.value = [];
    },
    addWord: (state, action) => {
      state.value.push(action.payload);
    },
    deleteWord: (state, action) => {
      state.value = state.value.filter((x) => x.id !== action.payload);
    },
  },
});

export const { addCollection, deleteCollection, addWord, deleteWord } =
  collectionSlice.actions;
export const selectCollection = (state) => state.collection.value;
export default collectionSlice.reducer;

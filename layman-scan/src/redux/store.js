import { configureStore } from "@reduxjs/toolkit";
import laymanReducer from "./laymanSlice";
import uploadedImageReducer from "./fileSlice";
import errorReducer from "./errorSlice";
import tesseractReducer from "./tesseractSlice";
import navigationReducer from "./navSlice";
import responseReducer from "./responseSlice";
import collectionReducer from "./collectionSlice";
import displayReducer from "./displaySlice";
export const store = configureStore({
  reducer: {
    layman: laymanReducer,
    uploadedImage: uploadedImageReducer,
    error: errorReducer,
    tesseract: tesseractReducer,
    navigation: navigationReducer,
    response: responseReducer,
    collection: collectionReducer,
    display: displayReducer,
  },
});

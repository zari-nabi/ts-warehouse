import { configureStore } from "@reduxjs/toolkit";
import CommonDataSliceReducer from "./Slices/CommonDataSlice";

export default configureStore({
  reducer: {
    commonData: CommonDataSliceReducer,
  },
});
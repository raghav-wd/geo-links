import { configureStore } from "@reduxjs/toolkit";
import styleReducer from "./reducers/style";

export default configureStore({
  reducer: {
    style: styleReducer,
  },
});

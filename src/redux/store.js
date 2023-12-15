import { configureStore } from "@reduxjs/toolkit";
import styleReducer from "./reducers/style";
import appReducer from "./reducers/app";
import linkReducer from "./reducers/link";
import userReducer from "./reducers/user";

export default configureStore({
  reducer: {
    style: styleReducer,
    app: appReducer,
    link: linkReducer,
    user: userReducer,
  },
});

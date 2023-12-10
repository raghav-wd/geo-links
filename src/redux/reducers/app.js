import { createSlice } from "@reduxjs/toolkit";
import screenLayer from "../../constants/screen-layers";
import pages from "../../constants/pages";

const counterSlice = createSlice({
  name: "app",
  initialState: {
    addLayerScreenType: screenLayer.SELECT,
    page: pages.LINKS,
    Modal: null,
  },
  reducers: {
    addLayerScreen(state, action) {
      state.addLayerScreenType = action.payload;
    },
    addModalHandler(state, action) {
      state.Modal = action.payload;
    },
  },
});

export const { addLayerScreen, addModalHandler } = counterSlice.actions;
export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import screenLayer from "../../constants/screen-layers";
import pages from "../../constants/pages";

const counterSlice = createSlice({
  name: "app",
  initialState: {
    addLayerScreenType: screenLayer.SELECT,
    page: pages.LINKS,
    Modal: null,
    snackbar: {
      open: false,
      message: "",
    },
  },
  reducers: {
    addLayerScreen(state, action) {
      state.addLayerScreenType = action.payload;
    },
    addModalHandler(state, action) {
      state.Modal = action.payload;
    },
    setSnackbar(state, action) {
      state.snackbar = action.payload;
    },
  },
});

export const { addLayerScreen, addModalHandler, setSnackbar } =
  counterSlice.actions;
export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import screenLayer from "../../constants/screen-layers";

const counterSlice = createSlice({
  name: "app",
  initialState: {
    addLayerScreenType: screenLayer.SELECT,
  },
  reducers: {
    addLayerScreen(state, action) {
      state.addLayerScreenType = action.payload;
    },
  },
});

export const { addLayerScreen } = counterSlice.actions;
export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "style",
  initialState: {
    button: {
      fill: true,
      shadow: false,
      border: "none",
      transparency: 0,
      color: "#FFD580",
    },
    text: {
      fontFamily: "helvetica",
      color: "#000",
    },
  },
  reducers: {
    styleFillButton(state, action) {
      state.button.fill = action.payload;
    },
    styleShadowButton(state, action) {
      state.button.shadow = action.payload;
    },
    styleBorderButton(state, action) {
      state.button.border = action.payload;
    },
    styleTransparencyButton(state, action) {
      state.button.transparency = action.payload;
    },
    styleColorButton(state, action) {
      state.button.color = action.payload;
    },
    styleColorText(state, action) {
      state.text.color = action.payload;
    },
    styleFontFamily(state, action) {
      state.text.fontFamily = action.payload;
    },
  },
});

export const {
  styleFillButton,
  styleShadowButton,
  styleBorderButton,
  styleFontFamily,
  styleColorButton,
  styleColorText,
  styleTransparencyButton,
} = counterSlice.actions;
export default counterSlice.reducer;

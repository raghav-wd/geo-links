import { createSlice } from "@reduxjs/toolkit";
import { themes, themeType } from "../../constants/themes";

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
    page: {
      color: "#515151",
      grainy: false,
      backgroundColor: "orange",
      backgroundImage: "linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%)",
      grainy: false,
    },
    theme: themes.BARANIME,
  },
  reducers: {
    styleGrainyPage(state, action) {
      state.page.grainy = action.payload;
    },
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
    styleColorPage(state, action) {
      state.page.color = action.payload;
    },
    styleBackgroundColorPage(state, action) {
      state.page.backgroundColor = action.payload;
    },
    styleBackgroundImagePage(state, action) {
      state.page.backgroundImage = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const {
  styleGrainyPage,
  styleFillButton,
  styleShadowButton,
  styleBorderButton,
  styleFontFamily,
  styleColorButton,
  styleColorText,
  styleTransparencyButton,
  styleColorPage,
  styleBackgroundColorPage,
  styleBackgroundImagePage,
  setTheme,
} = counterSlice.actions;
export default counterSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { themes, themeType } from "../../constants/themes";
import { userStyles } from "../../services/styles";

const initialState = {
  // button: {
  //   fill: true,
  //   shadow: false,
  //   border: "none",
  //   transparency: 0,
  //   color: "#CFCFF2",
  // },
  // text: {
  //   fontFamily: "helvetica",
  //   color: "#ffffff",
  // },
  // page: {
  //   color: "#515151",
  //   grainy: false,
  //   backgroundColor: "#F1F6FC",
  //   backgroundImage: "linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%)",
  // },
  // theme: themes.BARANIME,
};

export const fetchData = createAsyncThunk("style/fetchData", async () => {
  try {
    const response = await userStyles({
      userId: "bbd54f70-2ce7-4db6-8a14-5f9f67ed3470",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

const counterSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    addInitialStyles(state, action) {
      console.log(action.payload);
      state = action.payload;
    },
    styleGrainyPage(state, action) {
      state.data.page.grainy = action.payload;
    },
    styleFillButton(state, action) {
      state.data.button.fill = action.payload;
    },
    styleShadowButton(state, action) {
      state.data.button.shadow = action.payload;
    },
    styleBorderButton(state, action) {
      state.data.button.border = action.payload;
    },
    styleTransparencyButton(state, action) {
      state.data.button.transparency = action.payload;
    },
    styleColorButton(state, action) {
      state.data.button.color = action.payload;
    },
    styleColorText(state, action) {
      state.data.text.color = action.payload;
    },
    styleFontFamily(state, action) {
      console.log(state);
      state.data.text.fontFamily = action.payload;
    },
    styleColorPage(state, action) {
      state.data.page.color = action.payload;
    },
    styleBackgroundColorPage(state, action) {
      state.data.page.backgroundColor = action.payload;
    },
    styleBackgroundImagePage(state, action) {
      state.data.page.backgroundImage = action.payload;
    },
    setTheme(state, action) {
      console.log(state.data);
      state.data.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action);
        state.data = {
          button: {
            fill: action.payload.buttonFill,
            shadow: action.payload.buttonShadow,
            border: action.payload.buttonBorder,
            transparency: action.payload.buttonTransparency,
            color: action.payload.buttonColor,
          },
          text: {
            fontFamily: action.payload.textFontFamily,
            color: action.payload.textColor,
          },
          page: {
            color: action.payload.pageColor,
            grainy: action.payload.pageGrainy,
            backgroundColor: action.payload.pageBackgroundColor,
            backgroundImage: action.payload.pageBackgroundImage,
          },
          theme:
            themes[action.payload.themeType.toUpperCase().replace(" ", "")],
        };
        console.log(state);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  addInitialStyles,
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

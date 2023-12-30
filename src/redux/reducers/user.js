import { createSlice } from "@reduxjs/toolkit";
import screenLayer from "../../constants/screen-layers";
import pages from "../../constants/pages";

const counterSlice = createSlice({
  name: "user",
  initialState: {
    username: "taylor_swift",
    first_name: "raghav",
    last_name: "gupta",
    bio: "",
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setBio(state, action) {
      state.bio = action.payload;
    },
  },
});

export const { setUsername, setBio } = counterSlice.actions;
export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const counterSlice = createSlice({
  name: "link",
  initialState: {
    list: [],
  },
  reducers: {
    addLink(state, action) {
      state.list.push({
        id: uuid(),
        name: action.payload.name,
        link: action.payload.link,
      });
    },
    updateList(state, action) {
      state.list = action.payload;
      console.log(state.list);
    },
  },
});

export const { addLink, updateList } = counterSlice.actions;
export default counterSlice.reducer;

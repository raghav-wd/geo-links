import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import socials from "../../constants/socials";
import layerTypes from "../../constants/layerTypes";

const counterSlice = createSlice({
  name: "link",
  initialState: {
    list: [],
    socials: {
      instagram: { selected: 0 },
      facebook: { selected: 0 },
      youtube: { selected: 0 },
      pinterest: { selected: 0 },
      email: { selected: 0 },
      count: 0,
    },
  },
  reducers: {
    addLink(state, action) {
      state.list.push({
        id: uuid(),
        type: layerTypes.LINK,
        name: action.payload.name,
        link: action.payload.link,
      });
    },
    addText(state, action) {
      state.list.push({
        id: uuid(),
        type: layerTypes.TEXT,
        text: action.payload.text,
        color: action.payload.color,
      });
      console.log(state.list);
    },
    updateList(state, action) {
      state.list = action.payload;
    },
    addSocial(state, action) {
      if (state.socials.count == 0)
        state.list.push({ id: "social", type: layerTypes.SOCIAL });
      ++state.socials.count;
      state.socials[action.payload].selected = 1;
    },
    removeSocial(state, action) {
      if (state.socials.count == 1)
        state.list = state.list.filter(function (obj) {
          return obj.id !== "social";
        });
      --state.socials.count;
      state.socials[action.payload].selected = 0;
    },
  },
});

export const { addLink, addText, updateList, addSocial, removeSocial } =
  counterSlice.actions;
export default counterSlice.reducer;

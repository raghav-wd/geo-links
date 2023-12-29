import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import socials from "../../constants/socials";
import layerTypes from "../../constants/layerTypes";

const counterSlice = createSlice({
  name: "link",
  initialState: {
    list: [],
    socials: {
      instagram: { selected: 0, url: "" },
      facebook: { selected: 0, url: "" },
      youtube: { selected: 0, url: "" },
      pinterest: { selected: 0, url: "" },
      email: { selected: 0, url: "" },
      count: 0,
    },
  },
  reducers: {
    addLink(state, action) {
      state.list.push({
        id: action.payload.linkId,
        type: layerTypes.LINK,
        name: action.payload.name,
        link: action.payload.link,
        hidden: false,
      });
    },
    deleteLink(state, action) {
      let index = state.list.findIndex((item) => item.id == action.payload);
      ~index && state.list.splice(index, 1);
    },
    toggleHideLink(state, action) {
      let index = state.list.findIndex((item) => item.id == action.payload.id);
      state.list[index].hidden = !action.payload.visible;
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
      state.socials[action.payload.social].selected = 1;
      state.socials[action.payload.social].url =
        action.payload.url && action.payload.url;
    },
    addSocialLink(state, action) {
      state.socials[action.payload.social].url =
        action.payload.url && action.payload.url;
    },
    removeSocial(state, action) {
      if (state.socials.count == 1)
        state.list = state.list.filter(function (obj) {
          return obj.id !== "social";
        });
      --state.socials.count;
      state.socials[action.payload.social].selected = 0;
    },
  },
});

export const {
  addLink,
  deleteLink,
  toggleHideLink,
  addText,
  updateList,
  addSocial,
  removeSocial,
  addSocialLink,
} = counterSlice.actions;
export default counterSlice.reducer;

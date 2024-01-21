import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import socials from "../../constants/socials";
import layerTypes from "../../constants/layerTypes";

const counterSlice = createSlice({
  name: "link",
  initialState: {
    list: [
      { id: "social", type: layerTypes.SOCIAL },
      {
        id: "fksl",
        type: layerTypes.LINK,
        name: "Mumbai | 26th January 2024",
        link: "",
        hidden: false,
        city: "",
        province: "",
        country: "",
      },
      {
        id: "fksl2",
        type: layerTypes.LINK,
        name: "Hyderabad | 7th January 2024",
        link: "",
        hidden: false,
        city: "",
        province: "",
        country: "",
      },
      {
        id: "fkssl",
        type: layerTypes.LINK,
        name: "Bengaluru | 13th January 2024",
        link: "",
        hidden: false,
        city: "",
        province: "",
        country: "",
      },
      {
        id: "sfksl",
        type: layerTypes.LINK,
        name: "Bengaluru | 14th January 2024",
        link: "",
        hidden: false,
        city: "",
        province: "",
        country: "",
      },
      {
        id: "fksl5",
        type: layerTypes.LINK,
        name: "Faridabad | 19th January 2024",
        link: "",
        hidden: false,
        city: "",
        province: "",
        country: "",
      },
      {
        id: "fk3sl",
        type: layerTypes.LINK,
        name: "New Delhi | 21st January 2024",
        link: "",
        hidden: false,
        city: "",
        province: "",
        country: "",
      },
      {
        id: "fk0sl",
        type: layerTypes.LINK,
        name: "Saharanpur | 20th January 2024",
        link: "",
        hidden: false,
        city: "",
        province: "",
        country: "",
      },
      {
        id: "Hobart",
        type: layerTypes.LINK,
        name: "Patna | 6th January 2024",
        link: "",
        hidden: false,
        city: "",
        province: "",
        country: "",
      },
      // {
      //   id: "fksl2",
      //   type: layerTypes.LINK,
      //   name: "Perth",
      //   link: "",
      //   hidden: false,
      //   city: "",
      //   province: "",
      //   country: "",
      // },
      // {
      //   id: "fksl5",
      //   type: layerTypes.LINK,
      //   name: "Yup",
      //   link: "",
      //   hidden: false,
      //   city: "",
      //   province: "",
      //   country: "",
      // },
      // {
      //   id: "fk3sl",
      //   type: layerTypes.LINK,
      //   name: "Darwin",
      //   link: "",
      //   hidden: false,
      //   city: "",
      //   province: "",
      //   country: "",
      // },
      // {
      //   id: "fk0sl",
      //   type: layerTypes.LINK,
      //   name: "Adelaide",
      //   link: "",
      //   hidden: false,
      //   city: "",
      //   province: "",
      //   country: "",
      // },
      // {
      //   id: "fksl2",
      //   type: layerTypes.LINK,
      //   name: "Perth",
      //   link: "",
      //   hidden: false,
      //   city: "",
      //   province: "",
      //   country: "",
      // },
      // {
      //   id: "fksl5",
      //   type: layerTypes.LINK,
      //   name: "Yup",
      //   link: "",
      //   hidden: false,
      //   city: "",
      //   province: "",
      //   country: "",
      // },
      // {
      //   id: "fk3sl",
      //   type: layerTypes.LINK,
      //   name: "Darwin",
      //   link: "",
      //   hidden: false,
      //   city: "",
      //   province: "",
      //   country: "",
      // },
      // {
      //   id: "fk0sl",
      //   type: layerTypes.LINK,
      //   name: "Adelaide",
      //   link: "",
      //   hidden: false,
      //   city: "",
      //   province: "",
      //   country: "",
      // },
    ],
    socials: {
      instagram: { selected: 1, url: "" },
      facebook: { selected: 1, url: "" },
      youtube: { selected: 1, url: "" },
      pinterest: { selected: 0, url: "" },
      email: { selected: 1, url: "" },
      count: 0,
    },
  },
  reducers: {
    addInitialLinks(state, action) {
      state.list = action.payload;
    },
    addLink(state, action) {
      state.list.push({
        id: action.payload.linkId,
        type: layerTypes.LINK,
        name: action.payload.name,
        link: action.payload.link,
        hidden: false,
        city: "",
        province: "",
        country: "",
        lat: 0,
        long: 0,
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
  addInitialLinks,
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

import { useSelector } from "react-redux";
import { Cover, Rishi } from "./Templates/Basic/Cover";
import Gradient from "./Templates/Basic/Gradient";
import Solid from "./Templates/Basic/Solid";
import { themes } from "../../constants/themes";
import "./styles.css";
import React, { useEffect, useState } from "react";
import StarryNight from "./Templates/Custom/StarryNight";
import Pattern from "./Templates/Custom/Pattern";
import Clouds from "./Templates/Custom/Clouds";
import BarAnimation from "./Templates/Custom/BarAnimation";
import Underline from "./Templates/Custom/Underline";
import layerTypes from "../../constants/layerTypes";
import Neumorphic from "./Templates/Custom/Neumorphic";
import PinBoard from "./Templates/Custom/PinBoard";
import Doodle from "./Templates/Custom/Doodle";

export const Render = ({ emulated, estring }) => {
  const fetchedTheme = themes.SOLID;
  const fetchedLinks = {
    list: [
      {
        id: "fksl",
        type: layerTypes.LINK,
        name: "Kanpur",
        link: "",
        hidden: false,
        city: "kanpur",
        province: "",
        country: "",
        lat: 0,
        lon: 0,
        afar: -99,
      },
      {
        id: "fkssl",
        type: layerTypes.LINK,
        name: "Lucknow",
        link: "",
        hidden: false,
        city: "lucknow",
        province: "",
        country: "",
        lat: 0,
        lon: 0,
        afar: 100,
      },
      {
        id: "sfksl",
        type: layerTypes.LINK,
        name: "banglore",
        link: "",
        hidden: false,
        city: "banglore",
        province: "",
        country: "",
        lat: 0,
        lon: 0,
        afar: 1,
      },
    ],
    socials: {
      instagram: { selected: 0, url: "" },
      facebook: { selected: 0, url: "" },
      youtube: { selected: 0, url: "" },
      pinterest: { selected: 0, url: "" },
      email: { selected: 0, url: "" },
      count: 0,
    },
  };
  const geoLink = true;
  const sortLinks = () => {
    fetchedLinks.list.map((item) => {
      if (item.city == "kanpur") return (item.afar = 99);
    });
    if (geoLink)
      return fetchedLinks.list.sort(({ afar: a }, { afar: b }) => b - a);
    return fetchedLinks.list;
  };
  const theme = useSelector((state) =>
    estring ? fetchedTheme : state.style.theme
  );
  const app = useSelector((state) => state.app);

  const link = useSelector((state) =>
    estring ? sortLinks() : state.link.list
  );
  const style = useSelector((state) => state.style);
  const user = useSelector((state) => state.user);
  const Anxie = React.lazy(() => import("./Templates/Custom/Anxie"));

  const switchTheme = () => {
    switch (theme) {
      case themes.SOLID:
        return (
          <Solid
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
      case themes.DOODLE:
        return (
          <Doodle
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
      case themes.BARANIME:
        return (
          <BarAnimation
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
      case themes.STARRYNIGHT:
        return (
          <StarryNight
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
      case themes.CLOUDS:
        return (
          <Clouds
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
      case themes.NEUMORPHIC:
        return (
          <Neumorphic
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
      case themes.COVER:
        return (
          <Cover
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
      case themes.PATTERN:
        return (
          <Pattern
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
      case themes.GRADIENT:
        return (
          <Gradient
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
      case themes.BACKGROUND:
        return (
          <Underline
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
      case themes.PINBOARD:
        return (
          <PinBoard
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
      case themes.CUSTOM:
        return (
          <Anxie
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
      default:
        return (
          <Solid
            emulated={emulated}
            estring={estring}
            app={app}
            link={link}
            style={style}
            user={user}
          />
        );
    }
  };
  return switchTheme();
};

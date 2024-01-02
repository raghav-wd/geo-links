import { useSelector } from "react-redux";
import { Cover, Rishi } from "./Templates/Basic/Cover";
import Gradient from "./Templates/Basic/Gradient";
import Solid from "./Templates/Basic/Solid";
import { themes } from "../../constants/themes";
import "./styles.css";
import React, { useState } from "react";
import StarryNight from "./Templates/Custom/StarryNight";
import Pattern from "./Templates/Custom/Pattern";
import Clouds from "./Templates/Custom/Clouds";
import BarAnimation from "./Templates/Custom/BarAnimation";
import Underline from "./Templates/Custom/Underline";
import layerTypes from "../../constants/layerTypes";
import Neumorphic from "./Templates/Custom/Neumorphic";

export const Render = ({ emulated, estring }) => {
  const fetchedTheme = themes.SOLID;
  const fetchedLinks = {
    list: [
      {
        id: "sjdlkfj",
        type: layerTypes.LINK,
        name: "raghv",
        link: "",
        hidden: false,
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
  const theme = useSelector((state) =>
    estring ? fetchedTheme : state.style.theme
  );
  const app = useSelector((state) => state.app);
  const link = useSelector((state) =>
    estring ? fetchedLinks.list : state.link.list
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

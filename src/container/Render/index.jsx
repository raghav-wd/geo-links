import { useSelector } from "react-redux";
import { Cover, Rishi } from "./Templates/Basic/Cover";
import Gradient from "./Templates/Basic/Gradient";
import Solid from "./Templates/Basic/Solid";
import { themes } from "../../constants/themes";
import "./styles.css";
import React from "react";
import StarryNight from "./Templates/Custom/StarryNight";
import Pattern from "./Templates/Custom/Pattern";
import Clouds from "./Templates/Custom/Clouds";
import BarAnimation from "./Templates/Custom/BarAnimation";
import Background from "./Templates/Basic/Background";
import Underline from "./Templates/Custom/Underline";

export const Render = ({ emulated, estring }) => {
  const fetchedTheme = themes.CLOUDS;
  const theme = useSelector((state) =>
    estring ? fetchedTheme : state.style.theme
  );
  const Anxie = React.lazy(() => import("./Templates/Custom/Anxie"));
  const switchTheme = () => {
    switch (theme) {
      case themes.SOLID:
        return <Solid emulated={emulated} estring={estring} />;
      case themes.BARANIME:
        return <BarAnimation emulated={emulated} />;
      case themes.STARRYNIGHT:
        return <StarryNight emulated={emulated} />;
      case themes.CLOUDS:
        return <Clouds emulated={emulated} />;
      case themes.COVER:
        return <Cover emulated={emulated} />;
      case themes.PATTERN:
        return <Pattern emulated={emulated} />;
      case themes.GRADIENT:
        return <Gradient emulated={emulated} />;
      case themes.BACKGROUND:
        return <Underline emulated={emulated} />;
      case themes.CUSTOM:
        return <Anxie emulated={emulated} />;
      default:
        return <Solid emulated={emulated} />;
    }
  };
  return switchTheme();
};

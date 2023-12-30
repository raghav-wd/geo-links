import { useSelector } from "react-redux";
import { Cover, Rishi } from "./Templates/Basic/Cover";
import Gradient from "./Templates/Basic/Gradient";
import Solid from "./Templates/Basic/Solid";
import { themes } from "../../constants/themes";
import "./styles.css";
import BarAnimation from "./Templates/Custom/BarAnimation";
import React from "react";
import Anxie from "./Templates/Custom/Anxie";

export const Render = ({ emulated }) => {
  const style = useSelector((state) => state.style);
  const Anxie = React.lazy(() => import("./Templates/Custom/Anxie"));
  const switchTheme = () => {
    switch (style.theme) {
      case themes.SOLID:
        return <Solid emulated={emulated} />;
      case themes.BARANIME:
        return <BarAnimation emulated={emulated} />;
      case themes.COVER:
        return <Cover emulated={emulated} />;
      case themes.GRADIENT:
        return <Gradient emulated={emulated} />;
      case themes.CUSTOM:
        return <Anxie emulated={emulated} />;
      default:
        return <Solid emulated={emulated} />;
    }
  };
  return switchTheme();
};

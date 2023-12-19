import { useSelector } from "react-redux";
import { Cover, Rishi } from "./Templates/Basic/Cover";
import Gradient from "./Templates/Basic/Gradient";
import Solid from "./Templates/Basic/Solid";
import { themes } from "../../constants/themes";
import Anxie from "./Templates/Custom/Anxie";

export const Render = ({ emulated }) => {
  const style = useSelector((state) => state.style);
  const switchTheme = () => {
    switch (style.theme) {
      case themes.SOLID:
        return <Anxie emulated={emulated} />;
      case themes.COVER:
        return <Cover emulated={emulated} />;
      case themes.GRADIENT:
        return <Gradient emulated={emulated} />;
      default:
        return <Solid emulated={emulated} />;
    }
  };
  return switchTheme();
};

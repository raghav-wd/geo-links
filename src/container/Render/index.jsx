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
import { getAllLinks } from "../../services/links";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/reducers/style";
import { userStyles } from "../../services/styles";
import Doodle from "./Templates/Custom/Doodle";
import Background from "./Templates/Basic/Background";

export const Render = ({ emulated, estring }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedLinks, setFetchedLinks] = useState({
    list: [],
    socials: {
      instagram: { selected: 0, url: "" },
      facebook: { selected: 0, url: "" },
      youtube: { selected: 0, url: "" },
      pinterest: { selected: 0, url: "" },
      email: { selected: 0, url: "" },
      count: 0,
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    getAllLinks({ userId: "8c2e73c4-cebd-4b91-933f-46ae4379ef6d" })
      .then((res) => {
        fetchedLinks.list = res.data;
        setFetchedLinks(fetchedLinks);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const geoLink = true;
  const sortLinks = () => {
    fetchedLinks.list.map((item) => {
      if (item.city == "kanpur") return (item.afar = 99);
    });
    if (geoLink)
      return fetchedLinks.list.sort(({ afar: a }, { afar: b }) => b - a);
    return fetchedLinks.list;
  };
  const theme = useSelector((state) => state.style.data);
  const app = useSelector((state) => state.app);

  const link = useSelector((state) =>
    estring ? sortLinks() : state.link.list
  );
  const style = useSelector((state) => state.style.data);
  console.log(style);
  const user = useSelector((state) => state.user);
  const Anxie = React.lazy(() => import("./Templates/Custom/Anxie"));
  console.log(theme, style);
  const switchTheme = () => {
    switch (theme.theme) {
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
      case themes.PHOTO:
        return (
          <Background
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
          <BarAnimation
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

  return theme && isLoaded ? switchTheme() : <h1>Loading</h1>;
};

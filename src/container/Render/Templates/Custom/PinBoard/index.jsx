import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { CloseRounded, Share, ShareOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SocialIcons from "../../../Layers/SocialIcons";
import TextLayer from "../../../Layers/TextLayer";
import layerTypes from "../../../../../constants/layerTypes";
import { ProfilePictureCard } from "../../../../../components/Render/ProfilePictureCard";
import { themes } from "../../../../../constants/themes";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import GlassyTopBar from "../../../../../components/Estring/GlassTopBar";
import Footer from "../../../../../components/Estring/Footer";
import List from "../../../../../components/Estring/List";
// import Header from "../../../../../components/Estring/Header";
import openInNewTab from "../../../../../utils/openInNewTab";

const PinBoard = ({ emulated, estring, app, link, style, user }) => {
  const List = ({ list }) => {
    const renderList = (item) => {
      switch (item.type) {
        case layerTypes.LINK:
          return (
            <Link title={item.name} link={item.link} hidden={item.hidden} />
          );
        case layerTypes.SOCIAL:
          return <SocialIcons />;
        case layerTypes.TEXT:
          return <TextLayer text={item.text} color={item.color} />;
      }
    };
    return list.map((item) => renderList(item));
  };
  const Link = ({ title, link, hidden }) => {
    const style = useSelector((state) => state.style.data);
    const dispatch = useDispatch();
    let opacity = 0;
    if (style.button.transparency == 0) opacity = "FF";
    else if (style.button.transparency == 20) opacity = "50";
    else if (style.button.transparency == 50) opacity = "80";
    else opacity = "C0";

    let borderRadius = 0;
    if (style.button.border == "square") borderRadius = ".5rem";
    if (style.button.border == "round") borderRadius = "9999px";

    if (hidden) return;
    return (
      <article
        className={styles.card + " " + styles.horizontal}
        onClick={() => openInNewTab(link)}
      >
        <div className={styles["card-inner"]}>
          <span className={styles["card-pin"] + " " + styles["simple"]}></span>
          <Typography
            textAlign="center"
            p={0.6}
            style={{
              fontFamily: style.text.fontFamily,
              color: style.text.color,
            }}
            fontSize={14}
          >
            {title}
          </Typography>
          <span className={styles["card-pin"] + " " + styles["simple"]}></span>
        </div>
      </article>
    );
  };
  const Header = () => {
    return (
      <div
        className="header"
        style={{
          height: "100px",
          position: "relative",
          marginBottom: "64px",
        }}
      >
        <div
          className="bg"
          style={{
            width: "100%",
            height: "100px",
            position: "absolute",
          }}
        >
          <Grid
            className="avatar"
            flexDirection="column"
            alignItems="center"
            container
            style={{
              position: "absolute",
              top: "110px",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <article
              className={styles["card-profile"]}
              style={{
                width: "100px",
                height: "100px",
              }}
            >
              <div className={styles["card-inner"]}>
                <span
                  className={styles["card-pin"]}
                  style={{ top: "0px" }}
                ></span>
                <div className={styles["card-image"]}>
                  <img src="https://assets.codepen.io/285131/illustration-hand-with-cigarette-icon.jpg" />
                </div>
                {/* <div className={styles["card-content"]}>
                  <Typography fontSize={12} textAlign="center">
                    {user.username}
                  </Typography>
                </div> */}
              </div>
            </article>
            <Typography textAlign="center" style={{ color: style.page.color }}>
              @{user.username}
            </Typography>
            <Typography
              textAlign="center"
              style={{ color: style.page.color }}
              fontSize={14}
              minWidth={300}
            >
              {user.bio}
            </Typography>
          </Grid>
          <IconButton
            style={{
              position: "absolute",
              top: "90px",
              left: "80%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Share style={{ color: style.page.color }} />
          </IconButton>
        </div>
      </div>
    );
  };
  const navigate = useNavigate();

  return (
    <div
      className={styles.estring}
      style={{
        position: "relative",
        minHeight: emulated ? "100%" : "100vh",
        backgroundColor: style.page.backgroundColor,
        backgroundImage: "none",
      }}
    >
      <Button
        onClick={() => navigate(-1)}
        sx={{
          transform: "translateX(-13px)",
          display: { xs: "block", md: "none" },
        }}
      >
        <CloseRounded />
      </Button>
      <Header style={style} user={user} />
      <GlassyTopBar emulated={emulated} />
      <Box
        sx={{ px: { md: emulated ? 1.5 : 40, xs: 1.5 } }}
        pt={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <List list={link} />
        <Footer style={style} />
      </Box>
    </div>
  );
};

export default PinBoard;

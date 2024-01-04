import { Box, Button, IconButton, Typography } from "@mui/material";
import { CloseRounded, Share, ShareOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "../../../Layers/Link";
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
import Header from "../../../../../components/Estring/Header";

const Doodle = ({ emulated, estring, app, link, style, user }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.estring}
      style={{
        position: "relative",
        minHeight: emulated ? "100%" : "100vh",
      }}
    >
      <div
        style={
          style.page.grainy
            ? {
                bottom: 0,
                top: 0,
                width: "100%",
                minHeight: emulated ? "100%" : "100vh",
                position: "absolute",
              }
            : { background: "none" }
        }
      ></div>
      <Button
        onClick={() => navigate(-1)}
        sx={{
          transform: "translateX(-13px)",
          display: { xs: "block", md: "none" },
        }}
      >
        <CloseRounded />
      </Button>
      <Header
        style={style}
        user={user}
        design={{
          style: {
            profilePicture: {
              border: "6px solid #FEF5EB",
              boxSizing: "content-box",
            },
          },
        }}
      />
      <GlassyTopBar emulated={emulated} />
      <Box sx={{ px: { md: emulated ? 1.5 : 40, xs: 1.5 } }} pt={6}>
        <List list={link} />
        <Footer style={style} />
      </Box>
    </div>
  );
};

export default Doodle;

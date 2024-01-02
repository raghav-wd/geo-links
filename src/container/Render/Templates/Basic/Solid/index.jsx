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

const Solid = ({ emulated, estring }) => {
  const navigate = useNavigate();
  const fetchedLinks = [
    {
      id: "sjdlkfj",
      type: layerTypes.LINK,
      name: "raghv",
      link: "",
      hidden: false,
    },
  ];
  const fetchedUser = {
    username: estring,
    first_name: estring,
    last_name: estring,
    bio: estring,
  };
  const list = useSelector((state) =>
    estring ? fetchedLinks : state.link.list
  );
  const style = useSelector((state) => state.style);
  const user = useSelector((state) => (estring ? fetchedUser : state.user));

  return (
    <div
      className={styles.estring}
      style={{
        position: "relative",
        width: "inherit",
        minHeight: emulated ? "100%" : "100vh",
        backgroundColor: style.page.backgroundColor,
        backgroundImage: "none",
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
      <div
        className="header"
        style={{
          height: "100px",
          position: "relative",
          marginBottom: "36px",
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
              top: "100px",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ProfilePictureCard />
            <Typography textAlign="center" style={{ color: style.page.color }}>
              @{user.username}
            </Typography>
            <Typography
              textAlign="center"
              style={{ color: style.page.color }}
              fontSize={14}
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
            <Share />
          </IconButton>
        </div>
      </div>
      <GlassyTopBar emulated={emulated} />
      <Box sx={{ px: { md: emulated ? 1.5 : 40, xs: 1.5 } }} pt={6}>
        <List list={list} />
        <Footer style={style} />
      </Box>
    </div>
  );
};

export default Solid;

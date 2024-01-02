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

const Neumorphic = ({ emulated, estring, app, link, style, user }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.estring}
      style={{
        position: "relative",
        width: "inherit",
        minHeight: emulated ? "100%" : "100vh",
        backgroundColor: "#e5e9f4",
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
            <ProfilePictureCard className={styles.avatar} />
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
      <Box sx={{ px: { md: emulated ? 3 : 40, xs: 1.5 } }} pt={6}>
        <List list={link} />
        <Footer style={style} />
      </Box>
    </div>
  );
};

export default Neumorphic;

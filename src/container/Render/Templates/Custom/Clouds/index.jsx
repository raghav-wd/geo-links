import { Box, Button, Typography } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
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
import GlassyTopBar from "../../../../../components/Estring/GlassTopBar";
import Footer from "../../../../../components/Estring/Footer";
import List from "../../../../../components/Estring/List";
import Header from "../../../../../components/Estring/Header";

const Clouds = ({ emulated, estring, app, link, style, user }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.estring + " estring"}
      style={{
        minHeight: emulated ? "100%" : "100vh",
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
      <Box sx={{ px: { md: emulated ? 1.5 : 40, xs: 1.5 } }} pt={6}>
        <List list={link} />
        <Footer style={style} />
      </Box>
      <div class={styles.cloudsBackgroundContainer}>
        <div class={styles.cloudsBackground}>
          <img
            class="cloud-animate"
            src="https://www.datocms-assets.com/75134/1658040524-clouds-horizontal.png?auto=enhance%2Cformat&amp;q=100&amp;w=1280"
            alt="Decorative clouds"
            height="1032"
            width="1437"
            loading="lazy"
          />
          <img
            class="cloud-animate"
            src="https://www.datocms-assets.com/75134/1658040524-clouds-horizontal.png?auto=enhance%2Cformat&amp;q=100&amp;w=1280"
            alt="Decorative clouds"
            height="1032"
            width="1437"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Clouds;

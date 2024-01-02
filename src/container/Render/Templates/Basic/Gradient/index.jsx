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
import styles from "./styles.module.css";
import GlassyTopBar from "../../../../../components/Estring/GlassTopBar";
import List from "../../../../../components/Estring/List";
import Footer from "../../../../../components/Estring/Footer";

const Gradient = ({ emulated, estring, app, link, style, user }) => {
  const navigate = useNavigate();
  // const list = useSelector((state) => state.link.list);
  // const style = useSelector((state) => state.style);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const renderList = (item) => {
    switch (item.type) {
      case layerTypes.LINK:
        return <Link title={item.name} link={item.link} hidden={item.hidden} />;
      case layerTypes.SOCIAL:
        return <SocialIcons />;
      case layerTypes.TEXT:
        return <TextLayer text={item.text} color={item.color} />;
    }
  };
  return (
    <div
      className={styles.estring}
      style={{
        width: "inherit",
        position: "relative",
        minHeight: emulated ? "100%" : "100vh",
        backgroundImage: style.page.backgroundImage,
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
        </div>
      </div>
      <GlassyTopBar emulated={emulated} />
      <Box sx={{ px: { md: emulated ? 1.5 : 40, xs: 1.5 } }} pt={6}>
        <List list={link} />
        <Footer style={style} />
      </Box>
    </div>
  );
};

export default Gradient;

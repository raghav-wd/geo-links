import { Box, Button, Typography } from "@mui/material";
import { Link } from "./Layers/Link";
import { ProfilePictureCard } from "../../components/Render/ProfilePictureCard";
import Enroute from "./Enroute";
import { CloseRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SocialIcons from "../../components/SocialIcons";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TextLayer from "./Layers/TextLayer";
import layerTypes from "../../constants/layerTypes";

export const Basic = () => {
  return <Model />;
};

const Model = () => {
  const navigate = useNavigate();
  const link = useSelector((state) => state.link);
  const style = useSelector((state) => state.style.data);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const renderList = (item) => {
    switch (item.type) {
      case layerTypes.LINK:
        return <Link title={item.name} link={item.link} />;
      case layerTypes.SOCIAL:
        return <SocialIcons />;
      case layerTypes.TEXT:
        return <TextLayer text={item.text} color={item.color} />;
    }
  };
  return (
    <div
      id="estring"
      style={{
        width: "inherit",
        borderRadius: "20px",
      }}
    >
      <link rel="stylesheet" type="text/css" href="./custom.css" />
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
        style={{ height: "100px", position: "relative", marginBottom: "36px" }}
      >
        <div
          className="bg"
          style={{
            backgroundColor: "#FDF7E4",
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
      <div className="pf-body" style={{ minHeight: "20vh" }}>
        <Box px={1.5} pt={6}>
          {link.list.map((item) => renderList(item))}
          <Typography
            my={1}
            style={{
              position: "relative",
              top: "20vh",
              fontFamily: "monospace",
              textAlign: "center",
              fontWeight: "bold",
              userSelect: "none",
              color: style.page.color,
            }}
          >
            Powered by <i>Estring</i>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

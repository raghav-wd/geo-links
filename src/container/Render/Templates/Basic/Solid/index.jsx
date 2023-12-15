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

const Solid = ({ emulated }) => {
  const navigate = useNavigate();
  const link = useSelector((state) => state.link);
  const style = useSelector((state) => state.style);
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
      <Box sx={{ px: { md: emulated ? 1.5 : 40, xs: 1.5 } }} pt={6}>
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
  );
};

export default Solid;

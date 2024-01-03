import { IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ProfilePictureCard } from "../../Render/ProfilePictureCard";
import { Share } from "@mui/icons-material";

const Header = ({ style, user, design }) => {
  return (
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
          <ProfilePictureCard
            className={design && design.class && design.class.profilePicture}
            style={design && design.style && design.style.profilePicture}
          />
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
          <Share style={{ color: style.page.color }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;

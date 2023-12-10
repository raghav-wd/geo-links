import { Box, Button, Typography } from "@mui/material";
import { Link } from "../../components/Render/Link";
import { ProfilePictureCard } from "../../components/Render/ProfilePictureCard";
import Enroute from "./Enroute";
import { CloseRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SocialIcons from "../../components/SocialIcons";

export const Render = () => {
  return <Model />;
};

const Model = () => {
  const navigate = useNavigate();
  const link = useSelector((state) => state.link);
  const style = useSelector((state) => state.style);
  const dispatch = useDispatch();
  return (
    <div
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
            backgroundColor: "#FDF7E4",
            width: "100%",
            height: "100px",
            position: "absolute",
          }}
        >
          <div
            className="avatar"
            style={{
              position: "absolute",
              top: "100px",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ProfilePictureCard />
            <Typography textAlign="center" style={{ color: style.page.color }}>
              @raghav
            </Typography>
          </div>
        </div>
      </div>
      <div className="pf-body" style={{ minHeight: "20vh" }}>
        <Box px={1.5} pt={1}>
          {link.list.map((item) =>
            item.id == "social" ? (
              <SocialIcons />
            ) : (
              <Link title={item.name} link={item.link} />
            )
          )}
          <Typography
            my={1}
            style={{
              position: "relative",
              top: "20vh",
              fontFamily: "monospace",
              textAlign: "center",
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            Powered by <i>Estring</i>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

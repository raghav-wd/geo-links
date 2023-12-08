import { Button } from "@mui/material";
import { Link } from "../../components/Render/Link";
import { ProfilePictureCard } from "../../components/Render/ProfilePictureCard";
import Enroute from "./Enroute";
import { CloseRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Render = () => {
  return <Model />;
};

const Model = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => navigate(-1)}
        style={{ transform: "translateX(-13px)" }}
      >
        <CloseRounded />
      </Button>
      <div className="header" style={{ height: "200px" }}>
        <div
          className="bg"
          style={{
            backgroundColor: "#FDF7E4",
            width: "100%",
            height: "200px",
            position: "absolute",
          }}
        >
          <div
            className="avatar"
            style={{
              position: "absolute",
              top: "200px",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ProfilePictureCard />
          </div>
        </div>
      </div>
      <div className="pf-body">
        <Link title={"Hey"} />
      </div>
    </div>
  );
};

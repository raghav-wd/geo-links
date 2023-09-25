import { Typography } from "@mui/material";
import EditProfile from "./EditProfile";

const Appearance = () => {
  return (
    <>
      <Typography my={3} variant="h6">
        Profile
      </Typography>
      <EditProfile />
      <Typography my={3} variant="h6">
        Canvas
      </Typography>
    </>
  );
};

export default Appearance;

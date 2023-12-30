import { Avatar } from "@mui/material";
import { Wavy } from "./Wavy";

export const ProfilePictureCard = ({ style }) => {
  return (
    <>
      <Avatar
        style={style}
        alt="Remy Sharp"
        src="https://ugc.production.linktr.ee/9e3a8815-6f31-4334-9188-4991541f1d34_untitled.png"
        sx={{ width: 72, height: 72 }}
      />
    </>
  );
};

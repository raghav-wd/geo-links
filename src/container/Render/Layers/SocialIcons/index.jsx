import {
  Email,
  Facebook,
  Instagram,
  Pinterest,
  YouTube,
} from "@mui/icons-material";
import { Box, Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

const SocialIcons = () => {
  const socialsState = useSelector((state) => state.link.socials);
  const styleState = useSelector((state) => state.style);
  const icons = [];
  const fetchIcon = (name) => {
    switch (name) {
      case "facebook":
        return (
          <Facebook
            onClick={() => (window.location.href = socialsState[name].url)}
          />
        );
      case "pinterest":
        return (
          <Pinterest
            onClick={() => (window.location.href = socialsState[name].url)}
          />
        );
      case "email":
        return (
          <Email
            onClick={() => (window.location.href = socialsState[name].url)}
          />
        );
      case "instagram":
        return (
          <Instagram
            onClick={() => (window.location.href = socialsState[name].url)}
          />
        );
      case "youtube":
        return (
          <YouTube
            onClick={() => (window.location.href = socialsState[name].url)}
          />
        );
    }
  };
  return (
    <Box>
      <Grid container flexDirection="column" alignItems="center">
        <Grid container>
          {Object.keys(socialsState).forEach(function (key, index) {
            if (socialsState[key].selected) icons.push(fetchIcon(key));
          })}
          {icons.map((icon) => (
            <Box p={1} color={styleState.page.color}>
              {icon}
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialIcons;

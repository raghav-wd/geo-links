import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowForwardIosRounded,
  ArrowOutwardRounded,
  ContentCopyRounded,
  LinkRounded,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

const TopNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useSelector((state) => state.user);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const navigate = useNavigate();
  const location = useLocation();
  let head = "";
  switch (location.pathname) {
    case "/":
      head = (
        <Grid container alignItems="center">
          <Typography style={{ opacity: 0.6 }}>Home</Typography>
          <ArrowForwardIosRounded fontSize="small" />
          My Links
        </Grid>
      );
      break;
    case "/appearance":
      head = (
        <Grid container alignItems="center">
          <Typography style={{ opacity: 0.6 }}>Appearance</Typography>
          <ArrowForwardIosRounded fontSize="small" />
          Design your page
        </Grid>
      );
      break;
    case "/insights":
      head = (
        <Grid container alignItems="center">
          <Typography style={{ opacity: 0.6 }}>Insights</Typography>
          <ArrowForwardIosRounded fontSize="small" />
          Monitor your Estring
        </Grid>
      );
      break;
    case "/more":
      head = (
        <Grid container alignItems="center">
          <Typography style={{ opacity: 0.6 }}>More</Typography>
          <ArrowForwardIosRounded fontSize="small" />
          See your settings
        </Grid>
      );
      break;
    default:
      head = "Estring";
  }
  return (
    <Box p={1} style={{ borderBottom: "1px solid #51515122" }}>
      <Grid container alignItems="center">
        <Typography>{head}</Typography>
        <Grid ml="auto">
          <Button
            aria-describedby={id}
            variant="outlined"
            onClick={handleClick}
          >
            Share
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{ padding: "4px 8px" }}>
              <Grid display="flex" flexDirection="column">
                <Button
                  // onClick={() => navigate("/" + user.username)}
                  onClick={() => navigate("/render")}
                  style={{ textTransform: "none" }}
                  endIcon={<ArrowOutwardRounded />}
                >
                  Open your Estring
                </Button>
                <Button
                  onClick={() => navigator.clipboard.writeText("hi")}
                  style={{ textTransform: "none" }}
                  // startIcon={<LinkRounded />}
                  endIcon={<ContentCopyRounded />}
                >
                  Copy Estring
                </Button>
              </Grid>
            </Box>
          </Popover>
        </Grid>
      </Grid>
    </Box>
  );
};

function copyText() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

export default TopNav;

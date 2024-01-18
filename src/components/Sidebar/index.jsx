import {
  Avatar,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Link from "@mui/material/Link";
import Appearance from "../../container/Appearance";
import * as React from "react";
import PropTypes from "prop-types";
import {
  AddLink,
  Insights,
  MoreHoriz,
  Palette,
  RocketLaunchRounded,
} from "@mui/icons-material";
import {
  Link as RouterLink,
  MemoryRouter,
  useNavigate,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import Button from "@mui/material/Button";
import { ESLink, Logo } from "./styles";
import { CloseRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { updateUserStyles } from "../../services/styles";

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/" {...props} role={undefined} />
));

function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node,
};

const Sidebar = ({ setTopBar }) => {
  const style = useSelector((state) => state.style.data);

  const handleUpdateUserStyles = () => {
    console.log(style);
    updateUserStyles({
      ...style,
      theme: style.theme.name,
      userId: "bbd54f70-2ce7-4db6-8a14-5f9f67ed3470",
    });
  };
  const desktop = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  //   if (desktop)
  return (
    <Box style={{ position: "fixed", height: "100vh", width: "inherit" }}>
      <Grid container display="flex" flexDirection="column">
        {desktop ? (
          <Box mt={1.2} ml={3}>
            <Typography
              style={{
                fontFamily: "monospace",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <i>Estring</i>
            </Typography>
          </Box>
        ) : null}
        {!desktop ? (
          <Grid container alignItems="center" pt={1} px={2} mb={4}>
            <Grid xs={7} mr="auto">
              <Box>
                <Grid container alignItems="center">
                  <Grid xs={4}>
                    <Avatar src="./login-bg-3.png" />
                  </Grid>
                  <Grid xs={8}>
                    <Grid container>
                      <RocketLaunchRounded
                        fontSize="small"
                        style={{ color: "green" }}
                      />
                      <Typography fontSize="small" color="green">
                        Pro
                      </Typography>
                    </Grid>
                    <Typography>Pilot User</Typography>
                    {/* <Typography>estring.in/pilotuser</Typography> */}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid xs={2} ml="auto">
              <Button
                onClick={() => setTopBar(false)}
                style={{ transform: "translateX(-13px)" }}
              >
                <CloseRounded />
              </Button>
            </Grid>
          </Grid>
        ) : null}
        <Button
          component={RouterLink}
          to="/admin"
          variant="primary"
          onClick={() => setTopBar(false)}
          startIcon={<AddLink style={{ fontSize: "24px" }} />}
          style={{ justifyContent: "left", fontFamily: "" }}
        >
          Home
        </Button>
        <Button
          component={RouterLink}
          to="/admin/appearance"
          variant="primary"
          onClick={() => setTopBar(false)}
          startIcon={<Palette style={{ fontSize: "24px" }} />}
          style={{ justifyContent: "left", fontFamily: "" }}
        >
          Appearance
        </Button>
        <Button
          component={RouterLink}
          to="/admin/insights"
          variant="primary"
          onClick={() => setTopBar(false)}
          startIcon={<Insights style={{ fontSize: "24px" }} />}
          style={{ justifyContent: "left", fontFamily: "" }}
        >
          Insights
        </Button>
        <Button
          component={RouterLink}
          to="/admin/more"
          variant="primary"
          onClick={() => setTopBar(false)}
          startIcon={<MoreHoriz style={{ fontSize: "24px" }} />}
          style={{ justifyContent: "left", fontFamily: "" }}
        >
          More
        </Button>
      </Grid>
      <button onClick={handleUpdateUserStyles}>Update</button>
      {desktop ? (
        <Box style={{ position: "absolute", bottom: 0 }} p={1}>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <Avatar src="./login-bg-3.png" />
            </Grid>
            <Grid xs={8}>
              <Grid container flexDirection="column">
                <Grid container>
                  <RocketLaunchRounded
                    fontSize="small"
                    style={{ color: "green" }}
                  />
                  <Typography fontSize="small" color="green">
                    Pro
                  </Typography>
                </Grid>
              </Grid>
              <Typography>Pilot User</Typography>
            </Grid>
          </Grid>
        </Box>
      ) : null}
    </Box>
  );
};

export default Sidebar;

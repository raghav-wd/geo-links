import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import TopNav from "./components/TopNav";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Links from "./container/Links";
import Appearance from "./container/Appearance";
import Insights from "./container/Insights";
import More from "./container/More";
import AdbIcon from "@mui/icons-material/Adb";
import NavigationIcon from "@mui/icons-material/Navigation";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Fab,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  StepIcon,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Login from "./container/Login";
import { Render } from "./container/Render";
import "./App.css";
import { useShouldStructure } from "./hooks/useShouldStructure";
import Sidebar from "./components/Sidebar";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Topbar } from "./components/Topbar";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const desktop = useMediaQuery("(min-width:600px)");

  const theme = createTheme({
    palette: {
      primary: {
        light: "#000",
        main: "#515151",
        dark: "#002884",
        green: "green",
      },
      secondary: {
        light: "#000",
        main: "#000",
        dark: "#000",
      },
    },
  });

  const location = useLocation();
  const structure = useShouldStructure();
  const [topBar, setTopBar] = React.useState(false);
  const Dashboard = () => {
    return (
      <Grid container>
        <Grid xs={12} sx={{ display: { md: "none" } }}>
          {!desktop ? <Topbar setTopBar={setTopBar} /> : null}
          <Slide
            in={topBar}
            easing={{
              enter: theme.transitions.easing.easeIn,
            }}
            direction="down"
            mountOnEnter
            unmountOnExit
          >
            <Box
              position={{
                zIndex: 9999,
                position: "fixed",
                top: 0,
                height: "100vh",
                background: "white",
                width: "100vw",
              }}
            >
              <Sidebar setTopBar={setTopBar} />
            </Box>
          </Slide>
        </Grid>
        <Grid md={2} sx={{ display: { xs: "none", md: "block" } }}>
          <Sidebar setTopBar={setTopBar} />
        </Grid>
        <Grid xs={12} md={10}>
          <Outlet />
          {!desktop ? (
            <Fab
              variant="extended"
              style={{
                position: "fixed",
                bottom: 20,
                left: "50%",
                transform: "translateX(-50%)",
              }}
              onClick={() => navigate("/render")}
            >
              <NavigationIcon sx={{ mr: 1 }} />
              Preview
            </Fab>
          ) : null}
        </Grid>
      </Grid>
    );
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box>
          <Routes>
            <Route path="/">
              <Route path="signup" element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="render" element={<Render />} />
            </Route>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<Links />} />
              <Route path="appearance" element={<Appearance />} />
              <Route path="insights" element={<Insights />} />
              <Route path="more" element={<More />} />
            </Route>
          </Routes>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

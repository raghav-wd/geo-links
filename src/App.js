import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
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
  Alert,
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
  Snackbar,
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
import TopNav from "./components/TopNav";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSnackbar } from "./redux/reducers/app";
import getCities from "./utils/getCities";
import Landing from "./container/Landing";
import Signup from "./container/Signup";
import { Suspense } from "react";
import Estring from "./container/Estring";
import Pricing from "./container/Pricing";

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
  React.useEffect(() => {
    getCities();
  }, []);
  const Dashboard = () => {
    const app = useSelector((state) => state.app);
    const dispatch = useDispatch();
    return (
      <Box className="dashboard">
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
            <TopNav />
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
        <Snackbar
          open={app.snackbar.open}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          onClose={() => dispatch(setSnackbar({ open: false, message: "" }))}
        >
          <Alert
            onClose={() => dispatch(setSnackbar({ open: false, message: "" }))}
            severity="success"
            sx={{ width: "100%" }}
          >
            {app.snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    );
  };

  const Anxie = React.lazy(() =>
    import("./container/Render/Templates/Custom/Anxie")
  );
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box>
          <Suspense fallback={<div></div>}>
            <Routes>
              <Route path="/">
                <Route index element={<Landing />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="render" element={<Render />} />
                <Route path="anxie" element={<Anxie emulated={false} />} />
                <Route path="/:estring" element={<Estring />} />
              </Route>
              <Route path="/admin/" element={<Dashboard />}>
                <Route index element={<Links />} />
                <Route path="appearance" element={<Appearance />} />
                <Route path="insights" element={<Insights />} />
                <Route path="more" element={<More />} />
              </Route>
            </Routes>
          </Suspense>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

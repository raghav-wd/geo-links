import * as React from "react";
import {
  AccountCircle,
  LockOutlined,
  PersonOutlineRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Fade,
  FormControl,
  Grow,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Slide,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { login } from "../../services/auth";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [credentials, setCredentials] = React.useState({});

  const desktop = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleCredentials = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSigninAndSignup = () => {
    console.log(credentials);
    login(credentials)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("userId", res.data._id);
          navigate("/admin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        background: desktop ? "" : "#E8E5DA",
        // background: "#807079",
        height: "100vh",
      }}
    >
      <Grid container>
        <Grid
          xs={12}
          md={6}
          style={
            desktop
              ? {
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: desktop ? "#E8E5DA" : "",
                  // background: "#807079",
                }
              : {
                  display: "flex",
                  flexFlow: "column ",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "60vh",
                }
          }
        >
          {!desktop ? (
            <Grow timeout={1000} in={true}>
              <Grid container justifyContent="center">
                <img
                  src="./icon-dark.png"
                  width={92}
                  height={92}
                  className="login icon"
                />
                <Typography
                  style={{
                    justifyContent: "start",
                    fontFamily: "monospace",
                    textAlign: "center",
                    padding: "24px 0",
                    fontSize: "42px",
                    fontWeight: "bold",
                    color: "white",
                    textShadow: "2px 2px grey",
                  }}
                >
                  <i>estring</i>
                </Typography>
              </Grid>
            </Grow>
          ) : null}
          <Fade in={true} timeout={1000} easing={{ enter: "ease-in" }}>
            <img src="./login-bg-1.png" style={{ width: "80%" }} />
          </Fade>
        </Grid>
        <Grid
          xs={12}
          md={6}
          style={
            desktop
              ? {
                  height: "100vh",
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }
              : {
                  height: "auto",
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }
          }
        >
          {desktop ? (
            <img src="./icon-dark.png" width={92} className="login icon" />
          ) : null}
          {desktop ? (
            <Slide in={true}>
              <Typography
                style={{
                  paddingTop: 0,
                  justifyContent: "start",
                  fontFamily: "monospace",
                  textAlign: "center",
                  padding: "24px 0",
                  fontSize: "64px",
                  fontWeight: "bold",
                  color: "#E8E5DA",
                  textShadow: "2px 2px grey",
                }}
              >
                <i>estring</i>
              </Typography>
            </Slide>
          ) : null}
          <Fade timeout={1000} in={true}>
            <FormControl sx={{ mt: 0, width: "70%" }} variant="standard">
              <FormControl variant="standard" sx={{ my: 2 }}>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Email
                </InputLabel>
                <Input
                  onChange={handleCredentials}
                  name="email"
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonOutlineRounded />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl variant="standard" style={{ paddingBottom: "24px" }}>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Password
                </InputLabel>
                <Input
                  name="password"
                  onChange={handleCredentials}
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  startAdornment={
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  }
                  //   endAdornment={
                  //     <InputAdornment position="end">
                  //       <IconButton
                  //         aria-label="toggle password visibility"
                  //         onClick={handleClickShowPassword}
                  //         onMouseDown={handleMouseDownPassword}
                  //       >
                  //         {showPassword ? <VisibilityOff /> : <Visibility />}
                  //       </IconButton>
                  //     </InputAdornment>
                  //   }
                />
              </FormControl>
              <Button
                variant="outlined"
                style={{
                  border: "none",
                  backgroundColor: "#515151",
                  opacity: 0.6,
                  color: "white",
                }}
                onClick={handleSigninAndSignup}
              >
                Login
              </Button>
            </FormControl>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;

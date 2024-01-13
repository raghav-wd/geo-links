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
import { useSelector } from "react-redux";
import { signup } from "../../services/auth";
import Topbar from "../../components/Landing/Topbar";

const Signup = () => {
  const app = useSelector((state) => state.app);
  const [showPassword, setShowPassword] = React.useState(false);
  const [credentials, setCredentials] = React.useState({
    username: app.handleText,
  });
  const desktop = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleCredentials = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSignup = () => {
    signup(credentials)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          localStorage.setItem("userId", res.data._id);
          navigate("/admin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      style={{
        background: "#fdfaf9",
        height: "100vh",
      }}
      className="signup"
    >
      <Topbar />
      <Grid container alignItems="center" flexDirection="column">
        <Grid md={12}>
          <Typography textAlign="center" variant="h5" p={2}>
            {/* Estring */}
          </Typography>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Box height="86vh" style={{ background: "white" }} p={4}>
            <Typography
              fontFamily="Nunito"
              fontWeight={900}
              textAlign="center"
              variant="h6"
              py={4}
            >
              Sign up. It's free!
            </Typography>
            <form>
              <input
                name="username"
                placeholder="Username"
                defaultValue={app.handleText}
                onChange={handleCredentials}
              />
              <input
                onChange={handleCredentials}
                name="email"
                placeholder="Email Address"
              />
              <input
                onChange={handleCredentials}
                name="password"
                placeholder="Choose a password"
              />
            </form>
            <Typography color="#8f94a4" fontSize={13} py={3}>
              Estring is a safe, friendly place. Pages that break our terms will
              be unpublished. You must be 18 or over to use Ko-fi.
            </Typography>

            <Button
              className="blue-cta"
              onClick={handleSignup}
              style={{
                color: "white",
                backgroundColor: "#1ac0ff",
                textTransform: "none",
              }}
            >
              Create account
            </Button>
            <Typography
              style={{ textDecoration: "underline", cursor: "pointer" }}
              color="#818181"
              fontSize={16}
              fontFamily="Nunito"
              textAlign="center"
              my={4}
              onClick={() => navigate("/login")}
            >
              Already have an account? Log in here
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;

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

  const handleSignin = () => {
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
        background: "#fdfaf9",
        height: "100vh",
      }}
      className="signup"
    >
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
              Log In
            </Typography>
            <form>
              <input
                name="email"
                placeholder="Email"
                onChange={handleCredentials}
              />
              <input
                name="password"
                placeholder="Choose a password"
                onChange={handleCredentials}
              />
            </form>
            <Typography textAlign="right" color="#8f94a4" py={3}>
              Forgot Password?
            </Typography>

            <Button
              className="blue-cta"
              onClick={handleSignin}
              style={{
                color: "white",
                backgroundColor: "#1ac0ff",
                textTransform: "none",
              }}
            >
              Login
            </Button>
            <Typography
              style={{ cursor: "pointer" }}
              color="#818181"
              fontSize={16}
              fontFamily="Nunito"
              textAlign="center"
              my={4}
              onClick={() => navigate("/signup")}
            >
              New to Estring? Sign up here
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;

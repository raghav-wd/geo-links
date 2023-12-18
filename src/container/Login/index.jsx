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
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { login } from "../../services/auth";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginCredentials, setLoginCredentials] = React.useState({});

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = () => {
    login(loginCredentials)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
          <Input
            onChange={handleInputChange}
            id="input-with-icon-adornment"
            name="email"
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlineRounded />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
          <Input
            onChange={handleInputChange}
            id="standard-adornment-password"
            name="password"
            type={showPassword ? "text" : "password"}
            startAdornment={
              <InputAdornment position="start">
                <LockOutlined />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button onClick={handleLogin} variant="outlined">
          Login
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;

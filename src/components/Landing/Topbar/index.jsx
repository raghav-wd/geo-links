import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import styles from "./styles.module.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Topbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const page = useLocation();
  const desktop = useMediaQuery("(min-width:600px)");
  return (
    <nav>
      <Box className={styles.topbar}>
        <Grid container alignItems="center" height="60px">
          <Typography
            variant="h5"
            sx={{ paddingLeft: { md: "64px", sx: "32px" } }}
            fontFamily="Nunito"
            fontWeight={700}
            onClick={() => navigate("/")}
          >
            E-string
          </Typography>
          <Box ml="auto">
            {desktop ? (
              <Button
                variant="outlined"
                onClick={() => navigate("/geolinks")}
                style={{
                  color: "black",
                  margin: "0 8px",
                  border: "none",
                  textTransform: "none",
                }}
              >
                How It Works
              </Button>
            ) : null}
            {desktop ? (
              <Button
                variant="outlined"
                onClick={() => navigate("/pricing")}
                style={{
                  color: "black",
                  margin: "0 8px",
                  border: "none",
                  textTransform: "none",
                }}
              >
                Pricing
              </Button>
            ) : null}
            {desktop ? (
              <Button
                className={styles.roundButton}
                variant="outlined"
                onClick={() => navigate("/login")}
                style={{
                  color: "black",
                  margin: "0 8px",
                }}
              >
                Log in
              </Button>
            ) : null}
            {page.pathname == "/signup" || page.pathname == "/login" ? null : (
              <Button
                className={styles.roundButton}
                onClick={() => navigate("/signup")}
                style={{
                  color: "white",
                  backgroundColor: "#1ac0ff",
                }}
              >
                Sign up free
              </Button>
            )}
          </Box>
          {!desktop ? (
            <div className={styles.wrapper} onClick={() => setOpen((s) => !s)}>
              <div
                className={open ? styles.icon + " " + styles.open : styles.icon}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : null}
        </Grid>
      </Box>
      <Box
        pt={2}
        className={styles.expandable}
        style={{ transform: `translateY(${open ? "-1px" : "-200px"})` }}
      >
        <Typography
          p={1.5}
          textAlign="left"
          onClick={() => navigate("/geolinks")}
        >
          How it works?
        </Typography>
        <Typography
          p={1.5}
          textAlign="left"
          onClick={() => navigate("/pricing")}
        >
          Pricing
        </Typography>
        <Typography p={1.5} textAlign="left" onClick={() => navigate("/login")}>
          Login
        </Typography>
      </Box>
    </nav>
  );
};

export default Topbar;

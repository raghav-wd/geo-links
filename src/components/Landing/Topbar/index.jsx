import { Box, Button, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <Box className={styles.topbar}>
      <Grid container alignItems="center" height="60px">
        <Typography
          variant="h6"
          sx={{ paddingLeft: { md: "64px", sx: "32px" } }}
        >
          Estring
        </Typography>
        <Box ml="auto">
          <Button
            variant="outlined"
            onClick={() => navigate("/login")}
            style={{
              color: "black",
              margin: "0 8px",
              border: "none",
              textTransform: "none",
            }}
          >
            How It Works
          </Button>
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
        </Box>
      </Grid>
    </Box>
  );
};

export default Topbar;

import { Box, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GlassyTopBar = ({ emulated, estring }) => {
  const [posY, setPosY] = useState(220);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 150) {
      setPosY(50);
    } else {
      setPosY(220);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const user = useSelector((state) => state.user);
  return (
    <Box
      sx={{ px: { md: emulated ? 1.5 : 40, xs: 1.5 } }}
      boxSizing="border-box"
      style={{
        width: "100%",
        position: "fixed",
        top: "40px",
        transform: `translate(0%, -${posY}%)`,
        transition: "all 0.2s ease-in-out",
        display: emulated ? "none" : "",
      }}
    >
      <Box px={2}>
        <Grid container alignItems="center">
          <Grid xs={6}>
            <Box
              p={1}
              style={{
                borderRadius: "10px",
                display: "inline-block",
                background: "rgba(0,0,0,0.25)",
                backdropFilter: "blur(100px)",
                boxShadow: "0px 0px 20px 2px rgba(0,0,0,0.1)",
              }}
            >
              <Typography color="white">@{user.username}</Typography>
            </Box>
          </Grid>
          <Grid xs={6} textAlign="right">
            <IconButton
              style={{
                background: "rgba(0,0,0,0.25)",
                backdropFilter: "blur(100px)",
                boxShadow: "0px 0px 20px 2px rgba(0,0,0,0.1)",
              }}
            >
              <svg
                class="FN5Av2GV5J80n1FxJxnC6"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style={{ stroke: "white" }}
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default GlassyTopBar;

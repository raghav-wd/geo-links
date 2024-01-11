import { Box, Button, IconButton, Switch, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ElectricBolt, Instagram, Mail } from "@mui/icons-material";
import openPage from "../../utils/openPage";
import { useNavigate } from "react-router-dom";
import { setHandle } from "../../redux/reducers/app";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import geolinkSrc from "./assets/geolink.png";
import personExcitedSrc from "./assets/person_excited.png";
import personConfusedSrc from "./assets/person_confused.png";
import Slide from "@mui/material/Slide";
import traditionalSrc from "./assets/traditional.png";
import { useState } from "react";
import Topbar from "../../components/Landing/Topbar";

const Geolinks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [geolink, setGeolink] = useState(true);
  return (
    <Box className={styles["landing-page"]}>
      <Topbar />
      <Typography
        className={styles.heading}
        p={2}
        maxWidth={750}
        sx={{
          textAlign: { xs: "left", md: "center" },
          fontSize: { xs: "200%", md: "260%" },
        }}
      >
        How does Estring help?
      </Typography>
      <Grid container py={8} style={{ backgroundColor: "#fbe8c929" }}>
        <Grid md={4} xs={12}>
          <Grid mt={8} px={3}>
            {/* <Typography variant="h4" textAlign="center" py={2}>
              The Problem
            </Typography> */}
            {/* <Typography>
            Linktree falls short in assisting influencers to increase ticket
            sales by neglecting the opportunity to showcase events occurring in
            their audience's specific city.
          </Typography> */}
            <Box textAlign="center">
              <Switch
                value={geolink}
                onChange={(e) => setGeolink((state) => !state)}
              />
            </Box>
            <Typography
              textAlign="center"
              p={1}
              fontWeight={900}
              color="#212121"
            >
              {geolink ? `Let's switch to Estring` : `Ahhh! Don't go back`}
            </Typography>
            <Typography p={2} variant="h6" color="#434b57">
              {geolink
                ? `This is what your link-in-bio looks like today. If you're relying on
            linktree alone, yourre leaving bunch of money on the table.`
                : `With Estring, we assist you in recognizing unidentified visitors, enabling you to unlock increased ticket sales.`}
            </Typography>
            {!geolink ? (
              <Box textAlign="center">
                <Button
                  className={styles.roundButton}
                  variant="outlined"
                  onClick={() =>
                    openPage(
                      "https://wa.me/6387658003?text=I%27m%20interested%20in%20Estring"
                    )
                  }
                  style={{
                    color: "black",
                    border: "none",
                    color: "white",
                    backgroundColor: "#ff5f5f",
                  }}
                >
                  Get Started
                </Button>
              </Box>
            ) : null}
          </Grid>
        </Grid>
        <Grid md={8} xs={12}>
          <Box display="flex" justifyContent="center">
            <Slide in={geolink} direction="right">
              <Box position="absolute">
                <Box className={styles.traditional}>
                  <div className={styles.highlighter}>
                    <img src={personConfusedSrc} className={styles.character} />
                    <Typography variant="h6" className={styles.text}>
                      Kay! This guy is on a tour... that's good.
                    </Typography>
                  </div>
                  <img
                    src={traditionalSrc}
                    height="600px"
                    className={styles.showcase}
                  />
                  ̀
                </Box>
              </Box>
            </Slide>
            <Slide in={!geolink} direction="left">
              <Box className={styles.geolink}>
                <div className={styles.highlighter}>
                  <Typography className={styles.text}>
                    <span style={{ fontSize: "24px", color: "#C88481" }}>
                      Wohoo!
                    </span>
                    <br />{" "}
                    <span style={{ color: "#C88481" }}>
                      He's coming next week in my city.
                    </span>
                  </Typography>
                  <img src={personExcitedSrc} className={styles.character} />
                </div>
                <img
                  className={styles.sparkle}
                  src="https://www.datocms-assets.com/75134/1658226536-sparkle.png?auto=enhance%2Cformat&amp;q=100&amp;w=360"
                  alt="decorative sparkle"
                  width="160"
                  height="160"
                  loading="lazy"
                />
                <img
                  className={styles.sparkle2}
                  src="https://www.datocms-assets.com/75134/1658226536-sparkle.png?auto=enhance%2Cformat&amp;q=100&amp;w=360"
                  alt="decorative sparkle"
                  width="60"
                  height="60"
                  loading="lazy"
                />
                <img
                  className={styles.sparkle3}
                  src="https://www.datocms-assets.com/75134/1658226536-sparkle.png?auto=enhance%2Cformat&amp;q=100&amp;w=360"
                  alt="decorative sparkle"
                  width="100"
                  height="100"
                  loading="lazy"
                />
                <div className={styles.highlighter1}>
                  <Typography variant="h6" className={styles.text1}>
                    South India cities shows are listed first based on visitors
                    location
                  </Typography>
                </div>
                <div className={styles.highlighter2}>
                  <Typography variant="h6" className={styles.text2}>
                    We also arranged the rest of the shows based on nearest city
                    to farthest from the visitor
                  </Typography>
                </div>
                <img
                  src={geolinkSrc}
                  height="600px"
                  className={styles.showcase}
                />
              </Box>
            </Slide>
          </Box>
        </Grid>
      </Grid>
      <footer>
        <Grid container spacing={2}>
          <Grid xs={6} md={3}></Grid>
          <Grid xs={6} md={3}>
            <Typography py={0.4} fontWeight={600} color="black">
              Features
            </Typography>
            <Typography py={0.4}>Plans</Typography>
          </Grid>
          <Grid xs={6} md={3}>
            <Typography py={0.4} fontWeight={600} color="black">
              Help & Support
            </Typography>
            <Typography py={0.4}>Contact</Typography>
            <Typography py={0.4}>Help</Typography>
            <Typography>+91 522-4044971</Typography>
          </Grid>
          <Grid xs={6} md={3}>
            <Typography py={0.4} fontWeight={600} color="black">
              About Estring
            </Typography>
            <Typography py={0.4}>About Estring</Typography>
            <Typography py={0.4}>Career</Typography>
            <Typography py={0.4}>Terms</Typography>
            <Typography py={0.4}>Privacy</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography px={2}>
              Estring &copy;{new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid xs={6} textAlign="right" pr={2}>
            <IconButton>
              <Instagram px={1} />
            </IconButton>
            <IconButton px={1}>
              <Mail />
            </IconButton>
          </Grid>
        </Grid>
      </footer>
    </Box>
  );
};

export default Geolinks;

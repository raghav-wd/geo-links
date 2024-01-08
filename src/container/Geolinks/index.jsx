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
import Slide from "@mui/material/Slide";
import traditionalSrc from "./assets/traditional.png";
import { useState } from "react";

const Geolinks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [geolink, setGeolink] = useState(true);
  return (
    <Box className={styles["landing-page"]}>
      <Grid container py={4}>
        <Grid md={4} xs={12}>
          <Typography variant="h4" textAlign="center" py={2}>
            How it works?
          </Typography>
          <Box textAlign="center">
            <Switch
              value={geolink}
              onChange={(e) => setGeolink((state) => !state)}
            />
          </Box>
          <Typography textAlign="center" p={1}>
            {geolink ? `Let's switch to Estring` : `Ahhh! Don't go back`}
          </Typography>
          <Typography p={2}>
            {geolink
              ? `This is what your link-in-bio looks like today. If you're relying on
            linktree alone, yourre leaving bunch of money on the table.`
              : `With Wunderkind, we help you identify known and unknown website visitors so you can unlock a new revenue channel. It's like turning the lights on your website.`}
          </Typography>
        </Grid>
        <Grid md={8} xs={12}>
          <Box display="flex" justifyContent="center">
            <Slide in={geolink} direction="right">
              <Box position="absolute">
                <Box className={styles.traditional}>
                  <div className={styles.highlighter}>
                    <Typography variant="h6" className={styles.text}>
                      I'm from Mumbai, oh I see a lot of links with different
                      cities
                    </Typography>
                  </div>
                  <img src={traditionalSrc} height="600px" />
                </Box>
              </Box>
            </Slide>
            <Slide in={!geolink} direction="left">
              <Box className={styles.geolink}>
                <div className={styles.highlighter}>
                  <Typography variant="h6" className={styles.text}>
                    Wohoo! He's having a show next week I must go
                  </Typography>
                </div>
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
                <img src={geolinkSrc} height="600px" />
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

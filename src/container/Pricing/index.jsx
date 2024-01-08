import { Box, Button, IconButton, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Check, ElectricBolt, Instagram, Mail } from "@mui/icons-material";
import openPage from "../../utils/openPage";
import { useNavigate } from "react-router-dom";
import { setHandle } from "../../redux/reducers/app";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Pricing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  return (
    <Box className={styles["pricing-page"]}>
      <Typography lineHeight="18px">
        E<span style={{ fontWeight: "bold" }}>·</span>
        string
      </Typography>
      <Typography variant="h3" textAlign="center" py={10}>
        Choose the plan
        <br />
        that’s right for you.
      </Typography>
      {/* <Grid container spacing={2} justifyContent="center">
        <Grid>
          <Typography>Monthly Billing</Typography>
        </Grid>
        <Grid>
          <Typography>Swithc</Typography>
        </Grid>
        <Grid>
          <Typography>Billed Annually</Typography>
        </Grid>
      </Grid> */}
      <Grid container spacing={2} justifyContent="center" width="100%">
        <Grid xs={12} md={4} className={styles["plan-hero"]}>
          <Typography variant="h4">Starter</Typography>
          <Typography>
            For your personal Linktree Everything you do, in one single link Key
            features
          </Typography>
          <Typography variant="h4">
            ₹0/-<Typography fontSize={10}>free, forever</Typography>
          </Typography>
          <ul>
            <li>
              <Check />
              Unlimited links
            </li>
            <li>
              <Check />
              Access to basic template library
            </li>
            <li>
              <Check />
              Page analytics
            </li>
            {/* <li>
              <Check />
              In-app customization
            </li> */}
          </ul>
        </Grid>
        <Grid
          xs={12}
          md={4}
          style={{ backgroundColor: "whitesmoke" }}
          className={styles["plan-hero-recommended"]}
        >
          <Typography variant="h4">Pro</Typography>
          <Typography>
            For creators ready to supercharge their earning potential on socials
          </Typography>
          <Typography variant="h4">
            ₹699/-<Typography fontSize={10}>billed monthly</Typography>
          </Typography>
          <Typography>
            <ul>
              <li>
                <Check />
                Geolocation optimizer
              </li>
              <li>
                <Check />
                Scheduling
              </li>
              <li>
                <Check />
                Custom & animated templates
              </li>
              <li>
                <Check />
                Enhanced analytics and insights
              </li>
              <li>
                <Check />
                Option to hide Estring logo
              </li>
              <li>
                <Check />
                Conversion tracking
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid xs={12} md={4} className={styles["plan-hero"]}>
          <Typography variant="h4">Pro Plus</Typography>
          <Typography variant="h4">
            ₹999/-<Typography fontSize={10}>billed monthly</Typography>
          </Typography>
          <ul>
            <li>
              <Check />
              All the Pro benefits
            </li>
            <li>
              <Check />
              Professionally designed page templates
            </li>
            <li>
              <Check />
              Conversion tracking (A/B Testing)
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={8} mb={18}>
        <Box sx={{ md: { minWidth: "600px" } }}>
          <Typography variant="h4" textAlign="center" my={8}>
            Pricing FAQs
          </Typography>
          <Typography>Why go Pro?</Typography>
          <Typography>Here's why this plan is best for you...</Typography>
        </Box>
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

export default Pricing;

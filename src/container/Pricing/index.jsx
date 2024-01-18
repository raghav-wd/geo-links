import { Box, Button, IconButton, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Check, ElectricBolt, Instagram, Mail } from "@mui/icons-material";
import openPage from "../../utils/openPage";
import { useNavigate } from "react-router-dom";
import { setHandle } from "../../redux/reducers/app";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Topbar from "../../components/Landing/Topbar";
import Footer from "../../components/Landing/Footer";

const Pricing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  return (
    <Box className={styles["pricing-page"]}>
      <Topbar />
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
      <Footer />
    </Box>
  );
};

export default Pricing;

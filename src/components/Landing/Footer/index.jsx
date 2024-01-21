import { IconButton, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Instagram, Mail } from "@mui/icons-material";
import openPage from "../../../utils/openPage";

const Footer = () => {
  return (
    <footer>
      <Grid
        container
        spacing={2}
        sx={{ paddingLeft: { lg: "128px", xs: "24px" } }}
      >
        <Grid xs={6} md={3}>
          <Typography py={0.4} fontWeight={600} color="black">
            Features
          </Typography>
          <Typography py={0.4}>Plans</Typography>
        </Grid>
        <Grid xs={6} md={3}>
          <Typography py={0.4} fontWeight={600} color="black">
            Connect
          </Typography>
          <IconButton
            onClick={() => openPage("https://www.instagram.com/estring.in/")}
          >
            <Instagram px={1} />
          </IconButton>
          <IconButton px={1}>
            <Mail />
          </IconButton>
        </Grid>
        <Grid xs={6} md={3}>
          <Typography py={0.4} fontWeight={600} color="black">
            Help & Support
          </Typography>
          <Typography py={0.4}>Contact</Typography>
          <Typography py={0.4}>Help</Typography>
          <Typography>+91 6387658003</Typography>
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
        <Grid xs={6} mt={4}>
          <Typography px={2}>
            Estring &copy;{new Date().getFullYear()}
          </Typography>
        </Grid>
        {/* <Grid xs={6} textAlign="right" pr={2}>
          <IconButton>
            <Instagram px={1} />
          </IconButton>
          <IconButton px={1}>
            <Mail />
          </IconButton>
        </Grid> */}
      </Grid>
    </footer>
  );
};

export default Footer;

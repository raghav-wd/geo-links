import { Box, Button, Typography } from "@mui/material";
import EditProfile from "./EditProfile";
import ThemePreviewCard from "../../components/ThemePreviewCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FontPreviewCard from "../../components/FontPreviewCard";

const Appearance = () => {
  return (
    <Box mx={1}>
      <Typography my={3} variant="h6">
        Profile
      </Typography>
      <EditProfile />
      <Typography my={3} variant="h6">
        Choose Design
      </Typography>
      <ThemePreviewCard title="Basic" />
      <Typography my={3} variant="h6">
        Page Colors
      </Typography>
      <Typography mt={3} variant="h6">
        Button Style
      </Typography>
      <Typography>Fill</Typography>

      <Typography my={3} variant="h6">
        Button Transparency
      </Typography>
      <Grid container>
        <Button
          variant="outlined"
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: "none",
            width: "80px",
          }}
        >
          0%
        </Button>
        <Button
          variant="outlined"
          style={{ borderRadius: 0, borderRight: "none", width: "80px" }}
        >
          25%
        </Button>
        <Button
          variant="outlined"
          style={{ borderRadius: 0, borderRight: "none", width: "80px" }}
        >
          50%
        </Button>
        <Button
          variant="outlined"
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            width: "80px",
          }}
        >
          100%
        </Button>
      </Grid>
      <Typography mt={3} variant="h6">
        Fonts
      </Typography>
      <Typography my={1}>Pick a font that that matches your brand</Typography>
      <Grid container spacing={1}>
        <Grid>
          <FontPreviewCard title="helvetica" />
        </Grid>
        <Grid>
          <FontPreviewCard title="fantasy" />
        </Grid>
        <Grid>
          <FontPreviewCard title="cursive" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Appearance;

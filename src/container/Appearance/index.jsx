import { Box, Button, Typography } from "@mui/material";
import EditProfile from "./EditProfile";
import ThemePreviewCard from "../../components/ThemePreviewCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FontPreviewCard from "../../components/FontPreviewCard";
import ButtonStylePreview from "../../components/ButtonStylePreview";
import "./styles.css";
import ColorPicker from "material-ui-color-picker";
import { ColorizeRounded } from "@mui/icons-material";

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
      <Grid container>
        <ThemePreviewCard title="Pro" />
        <ThemePreviewCard title="Basic" />
        <ThemePreviewCard title="Moonlight" />
        <ThemePreviewCard title="Velvet" />
      </Grid>
      <Typography my={3} variant="h6">
        Page Colors
      </Typography>
      <Typography></Typography>
      <ColorPicker onChange={() => {}} />
      <Typography mt={3} variant="h6">
        Button Style
      </Typography>
      <Typography my={1}>Color</Typography>
      <Grid container alignItems="center">
        <ColorPicker
          onChange={(e) => {
            console.log(e);
          }}
          className="clr-picker"
          style={{
            backgroundColor: "orange",
            width: "28px",
            height: "28px",
            borderRadius: "100%",
            border: "none",
          }}
        />
        <ColorizeRounded />
      </Grid>
      <ButtonStylePreview fill={true} />
      <ButtonStylePreview />
      <ButtonStylePreview shadow={true} />

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
      <Typography mt={3} mr={1} variant="h6">
        Fonts
      </Typography>
      <Typography my={1}>Color</Typography>
      <Grid container alignItems="center">
        <ColorPicker
          onChange={(e) => {
            console.log(e);
          }}
          className="clr-picker"
          style={{
            backgroundColor: "orange",
            width: "28px",
            height: "28px",
            borderRadius: "100%",
            border: "none",
          }}
        />
        <ColorizeRounded />
      </Grid>
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
        <Grid>
          <FontPreviewCard title="Rubik Bubbles" />
        </Grid>
        <Grid>
          <FontPreviewCard title="Ephesis" />
        </Grid>
        <Grid>
          <FontPreviewCard title="Josefin Sans" />
        </Grid>
        <Grid>
          <FontPreviewCard title="Smooch" />
        </Grid>
        <Grid>
          <FontPreviewCard title="Dancing Script" />
        </Grid>
        <Grid>
          <FontPreviewCard title="Pacifico" />
        </Grid>
        <Grid>
          <FontPreviewCard title="Caveat" />
        </Grid>
        <Grid>
          <FontPreviewCard title="Shadows into Light" />
        </Grid>
        <Grid>
          <FontPreviewCard title="Indie flower " />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Appearance;

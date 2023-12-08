import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import EditProfile from "./EditProfile";
import ThemePreviewCard from "../../components/ThemePreviewCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FontPreviewCard from "../../components/FontPreviewCard";
import ButtonStylePreview from "../../components/ButtonStylePreview";
import "./styles.css";
import ColorPicker from "material-ui-color-picker";
import { ColorizeRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  styleColorButton,
  styleColorText,
  styleFontFamily,
  styleTransparencyButton,
} from "../../redux/reducers/style";
import { useEffect } from "react";
import { Render } from "../Render";

const Appearance = () => {
  const style = useSelector((state) => state.style);
  const dispatch = useDispatch();
  const desktop = useMediaQuery("(min-width:600px)");

  const fonts = [
    "helvetica",
    "fantasy",
    "cursivee",
    "Rubik Bubbles",
    "Ephesis",
    "Josefin Sans",
    "Smooch",
    "Dancing Script",
    "Pacifico",
    "Caveat",
    "Shadows into Light",
    "Indie flower ",
  ];
  return (
    <Box mx={1}>
      <Grid container spacing={1}>
        <Grid xs={12} md={8} height="100vh">
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
                onChange={(color) =>
                  color ? dispatch(styleColorButton(color)) : null
                }
                className="clr-picker"
                style={{
                  backgroundColor: style.button.color,
                  width: "28px",
                  height: "28px",
                  borderRadius: "100%",
                  border: "none",
                }}
              />
              <ColorizeRounded />
            </Grid>
            <ButtonStylePreview
              fill={true}
              active={style.button.fill && !style.button.shadow}
            />
            <ButtonStylePreview
              active={!style.button.fill && !style.button.shadow}
            />
            <ButtonStylePreview
              shadow={true}
              active={style.button.shadow && !style.button.fill}
            />

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
                  backgroundColor:
                    style.button.transparency == 0 ? "#ebc86c" : "#00000000",
                }}
                onClick={() => dispatch(styleTransparencyButton(0))}
              >
                None
              </Button>
              <Button
                variant="outlined"
                style={{
                  borderRadius: 0,
                  borderRight: "none",
                  width: "80px",
                  backgroundColor:
                    style.button.transparency == 20 ? "#ebc86c" : "#00000000",
                }}
                onClick={() => dispatch(styleTransparencyButton(20))}
              >
                20%
              </Button>
              <Button
                variant="outlined"
                style={{
                  borderRadius: 0,
                  borderRight: "none",
                  width: "80px",
                  backgroundColor:
                    style.button.transparency == 50 ? "#ebc86c" : "#00000000",
                }}
                onClick={() => dispatch(styleTransparencyButton(50))}
              >
                50%
              </Button>
              <Button
                variant="outlined"
                style={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  width: "80px",
                  backgroundColor:
                    style.button.transparency == 75 ? "#ebc86c" : "#00000000",
                }}
                onClick={() => dispatch(styleTransparencyButton(75))}
              >
                75%
              </Button>
            </Grid>
            <Typography mt={3} mr={1} variant="h6">
              Fonts
            </Typography>
            <Typography my={1}>Color</Typography>
            <Grid container alignItems="center">
              <ColorPicker
                onChange={(color) =>
                  color ? dispatch(styleColorText(color)) : null
                }
                className="clr-picker"
                style={{
                  backgroundColor: style.text.color,
                  width: "28px",
                  height: "28px",
                  borderRadius: "100%",
                  border: "none",
                }}
              />
              <ColorizeRounded />
            </Grid>
            <Typography my={1}>
              Pick a font that that matches your brand
            </Typography>
            <Grid container spacing={1}>
              {fonts.map((font) => (
                <Grid key={font}>
                  <FontPreviewCard title={font} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid
          xs={0}
          md={4}
          style={{
            background: "white",
            position: "fixed",
            height: "100vh",
            width: "inherit",
            right: 0,
          }}
        >
          {desktop ? <Render /> : null}
          {/* <iframe
            src="/render"
            style={{ width: "100%", height: "96vh" }}
            title="Estring renderer"
          ></iframe> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Appearance;

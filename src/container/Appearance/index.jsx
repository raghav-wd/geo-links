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
  styleBackgroundColorPage,
  styleColorButton,
  styleColorPage,
  styleColorText,
  styleFontFamily,
  styleTransparencyButton,
} from "../../redux/reducers/style";
import { useEffect } from "react";
import { Render } from "../Render";
import { themes } from "../../constants/themes";
import BasicThemeSettings from "./BasicThemeSettings";

const Appearance = () => {
  const style = useSelector((state) => state.style);
  const user = useSelector((state) => state.user);
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
    <Box mx={1} className="appearance">
      <Grid container spacing={1}>
        <Grid
          xs={12}
          md={8}
          height="100vh"
          style={{ overflowY: "scroll" }}
          pb={10}
        >
          <Box mx={1}>
            <Typography my={3} variant="h6">
              Profile
            </Typography>
            <EditProfile />
            <Typography my={3} variant="h6">
              Choose Design
            </Typography>
            <Grid container>
              <ThemePreviewCard
                title="Custom"
                image="customization.jpg"
                theme={themes.CUSTOM}
              />
            </Grid>
            <Typography my={3} variant="h6">
              Page Style
            </Typography>
            <Typography my={1}>Text Color</Typography>
            <Grid container alignItems="center" mb={1}>
              <ColorPicker
                onChange={(color) =>
                  color ? dispatch(styleColorPage(color)) : null
                }
                className="clr-picker"
                style={{
                  backgroundColor: style.page.color,
                  width: "28px",
                  height: "28px",
                  borderRadius: "100%",
                  border: "none",
                }}
              />
              <ColorizeRounded />
            </Grid>
            <Typography my={1}>Text</Typography>
            <Grid container>
              <ThemePreviewCard
                title="Solid Color"
                image="./bg-style-1.png"
                theme={themes.SOLID}
              />
              <ThemePreviewCard
                title="Cover Photo"
                image="./bg-style-2.png"
                theme={themes.COVER}
              />
              <ThemePreviewCard
                title="Background Photo"
                image="./bg-style-3.png"
                theme={themes.PHOTO}
              />
              <ThemePreviewCard
                title="Gradient"
                image="./bg-style-4.png"
                theme={themes.GRADIENT}
              />
            </Grid>
            <BasicThemeSettings />
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
          container
          justifyContent="center"
          alignContent="center"
          style={{
            height: "100vh",
          }}
        >
          {desktop ? (
            <Box
              style={{
                border: "10px solid black",
                borderRadius: "20px",
                height: "70%",
                width: "300px",
                overflowY: "scroll",
              }}
            >
              <Render emulated />
            </Box>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Appearance;

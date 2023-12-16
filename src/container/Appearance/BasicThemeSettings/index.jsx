import { ColorizeRounded } from "@mui/icons-material";
import {
  styleBackgroundColorPage,
  styleBackgroundImagePage,
} from "../../../redux/reducers/style";
import { themes } from "../../../constants/themes";

const { Box, Typography, Card } = require("@mui/material");
const { default: Grid } = require("@mui/material/Unstable_Grid2/Grid2");
const { default: ColorPicker } = require("material-ui-color-picker");
const { useSelector } = require("react-redux");
const { useDispatch } = require("react-redux");

const SolidSettings = () => {
  const style = useSelector((state) => state.style);
  const dispatch = useDispatch();
  return (
    <Box>
      <Typography py={2}>Background Color</Typography>
      <Grid container alignItems="center" mb={1}>
        <ColorPicker
          onChange={(color) =>
            color ? dispatch(styleBackgroundColorPage(color)) : null
          }
          className="clr-picker"
          style={{
            backgroundColor: style.page.backgroundColor,
            width: "28px",
            height: "28px",
            borderRadius: "100%",
            border: "none",
          }}
        />
        <ColorizeRounded />
      </Grid>
    </Box>
  );
};
const GradientSettings = () => {
  const style = useSelector((state) => state.style);
  const dispatch = useDispatch();
  const shades = [
    "linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%)",
    "linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)",
    "linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)",
    "linear-gradient( 135deg, #FFF720 10%, #3CD500 100%)",
    "linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)",
    "linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )",
    "linear-gradient( 109.5deg,  rgba(229,233,177,1) 11.2%, rgba(223,205,187,1) 100.2% )",
  ];
  return (
    <>
      <Typography py={2}>Gradient Color</Typography>
      <Grid container spacing={2}>
        {shades.map((backgroundImage) => (
          <Grid
            onClick={() => dispatch(styleBackgroundImagePage(backgroundImage))}
            style={{
              backgroundColor:
                backgroundImage == style.page.backgroundImage
                  ? "lightblue"
                  : "rgba(0, 0, 0, 0)",
            }}
          >
            <Card
              style={{
                backgroundImage,
                width: "40px",
                height: "40px",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
const BasicThemeSettings = () => {
  const style = useSelector((state) => state.style);
  return (
    <Box py={1}>
      {style.theme == themes.SOLID ? <SolidSettings /> : null}
      {style.theme == themes.GRADIENT ? <GradientSettings /> : null}
    </Box>
  );
};

export default BasicThemeSettings;

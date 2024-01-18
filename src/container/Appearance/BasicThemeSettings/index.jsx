import {
  AddPhotoAlternateOutlined,
  ColorizeRounded,
  Grain,
} from "@mui/icons-material";
import {
  styleBackgroundColorPage,
  styleBackgroundImagePage,
  styleGrainyPage,
} from "../../../redux/reducers/style";
import { themes } from "../../../constants/themes";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "styled-components";
const {
  Box,
  Typography,
  Card,
  Button,
  IconButton,
  Switch,
} = require("@mui/material");
const { default: Grid } = require("@mui/material/Unstable_Grid2/Grid2");
const { default: ColorPicker } = require("material-ui-color-picker");
const { useSelector } = require("react-redux");
const { useDispatch } = require("react-redux");

const SolidSettings = () => {
  const style = useSelector((state) => state.style.data);
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
      <Typography>Grainy</Typography>
      <Switch
        checked={style.page.grainy}
        onChange={(e) => dispatch(styleGrainyPage(e.target.checked))}
      />
    </Box>
  );
};
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const BackgroundPhotoSettings = () => {
  const style = useSelector((state) => state.style.data);
  const dispatch = useDispatch();
  const handlerImageUpload = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Box>
      <Typography py={2}>Select Background Photo</Typography>
      <form onSubmit={handlerImageUpload}>
        <Button
          style={{ width: "200px", height: "80px" }}
          component="label"
          variant="outlined"
          startIcon={<AddPhotoAlternateOutlined />}
        >
          Upload Image
          <VisuallyHiddenInput
            type="file"
            onChange={(e) => handlerImageUpload(e)}
          />
        </Button>
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};
const GradientSettings = () => {
  const style = useSelector((state) => state.style.data);
  const dispatch = useDispatch();
  const shades = [
    "linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%)",
    "linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)",
    "linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)",
    "linear-gradient( 135deg, #FFF720 10%, #3CD500 100%)",
    "linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)",
    "linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )",
    "linear-gradient( 109.5deg,  rgba(229,233,177,1) 11.2%, rgba(223,205,187,1) 100.2% )",
    "linear-gradient( 360deg, #ffc59f, #ffecd3, #abb4c9)",
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
      <Box py={2}>
        <Typography>Grainy</Typography>
        <Switch
          checked={style.page.grainy}
          onChange={(e) => dispatch(styleGrainyPage(e.target.checked))}
        />
      </Box>
    </>
  );
};
const BasicThemeSettings = () => {
  const style = useSelector((state) => state.style.data);
  return (
    <Box py={1}>
      {style.theme == themes.SOLID ? <SolidSettings /> : null}
      {style.theme == themes.PHOTO ? <BackgroundPhotoSettings /> : null}
      {style.theme == themes.GRADIENT ? <GradientSettings /> : null}
    </Box>
  );
};

export default BasicThemeSettings;

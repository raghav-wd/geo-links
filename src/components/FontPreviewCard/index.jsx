import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useDispatch, useSelector } from "react-redux";
import { styleFontFamily } from "../../redux/reducers/style";

const FontPreviewCard = ({ title, font = title }) => {
  const fontFamilyState = useSelector(
    (state) => state.style.data.text.fontFamily
  );
  const dispatch = useDispatch();
  return (
    <Button
      style={{
        width: "auto",
        display: "inline-block",
        height: "80px",
        backgroundColor: title == fontFamilyState ? "#ebc86c" : "#00000000",
      }}
      onClick={() => dispatch(styleFontFamily(title))}
      variant="outlined"
    >
      <Grid container alignItems="center" height="100%">
        <CardContent style={{ padding: "8px" }}>
          <Typography
            textAlign="center"
            fontFamily={font}
            textTransform="capitalize"
          >
            {title}
          </Typography>
        </CardContent>
      </Grid>
    </Button>
  );
};

export default FontPreviewCard;

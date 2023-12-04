import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const FontPreviewCard = ({ title, font = title }) => {
  return (
    <Button
      style={{
        width: "auto",
        display: "inline-block",
        height: "80px",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
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

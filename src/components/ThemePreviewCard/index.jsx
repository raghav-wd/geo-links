import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ThemePreviewCard = ({ title }) => {
  return (
    <Grid container flexDirection="column" alignItems="center" width={160}>
      <Card
        style={{
          width: "120px",
          height: "200px",
          backgroundImage: "url(./sample-theme.png)",
          backgroundPosition: "center center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CardContent></CardContent>
      </Card>
      <Typography>{title}</Typography>
    </Grid>
  );
};

export default ThemePreviewCard;

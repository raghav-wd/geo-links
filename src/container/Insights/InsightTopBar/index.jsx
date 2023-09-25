import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import {
  AdsClick,
  FiberManualRecordOutlined,
  Percent,
  Visibility,
} from "@mui/icons-material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div" textAlign="center" gutterBottom>
        Total Insights
      </Typography>
      <Grid container textAlign="center">
        <Grid xs={4} display="flex" alignItems="center" justifyContent="center">
          <FiberManualRecordOutlined fontSize="small" color="primary" /> Views
        </Grid>
        <Grid xs={4} display="flex" alignItems="center" justifyContent="center">
          <FiberManualRecordOutlined fontSize="small" color="primary" /> Clicks
        </Grid>
        <Grid xs={4} display="flex" alignItems="center" justifyContent="center">
          <FiberManualRecordOutlined fontSize="small" color="primary" /> CTR
        </Grid>
        {/*  */}
        <Grid xs={4} display="flex" alignItems="center" justifyContent="center">
          _
        </Grid>
        <Grid xs={4} display="flex" alignItems="center" justifyContent="center">
          _
        </Grid>
        <Grid xs={4} display="flex" alignItems="center" justifyContent="center">
          _
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
);

export default function InsightTopBar() {
  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

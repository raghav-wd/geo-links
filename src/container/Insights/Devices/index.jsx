import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { LineChart } from "@mui/x-charts/LineChart";

const Devices = () => {
  return (
    <Box>
      <Typography py={1} variant="h6">
        Devices
      </Typography>
      <Card variant="outlined" p={2}>
        <Grid container p={2}>
          <Grid xs={6}>
            <Typography>Android: 58k</Typography>
            <Typography>Iphone: 12k</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography>Chrome: 65k</Typography>
            <Typography>Safari: 9k</Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Devices;

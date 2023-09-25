import { Box, Card } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const ImpressionGraph = () => {
  return (
    <Box>
      <Card variant="outlined">
        <LineChart
          xAxis={[{ data: [10, 11, 12, 13, 14, 15, 16] }]}
          series={[
            {
              data: [200, 500, 232, 850, 150, 502, 902],
              label: "views",
              area: true,
              showMark: false,
            },
            {
              data: [49, 55, 23, 205, 34, 72, 283],
              label: "clicks",
              area: true,
              showMark: false,
            },
          ]}
          height={340}
        />
      </Card>
    </Box>
  );
};

export default ImpressionGraph;

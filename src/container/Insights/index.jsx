import { Typography } from "@mui/material";
import ImpressionGraph from "./ImpressionGraph";
import InsightTopBar from "./InsightTopBar";
import TopPerformers from "./TopPerformers";

const Insights = () => {
  return (
    <div>
      <InsightTopBar />
      <Typography my={2} variant="h6">
        Activity
      </Typography>
      <ImpressionGraph />
      <Typography my={2} variant="h6">
        Top Performers
      </Typography>
      <TopPerformers />
    </div>
  );
};

export default Insights;

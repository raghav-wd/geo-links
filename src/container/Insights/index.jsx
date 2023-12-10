import { Box, Typography } from "@mui/material";
import ImpressionGraph from "./ImpressionGraph";
import InsightTopBar from "./InsightTopBar";
import TopPerformers from "./TopPerformers";
import { Socials } from "./Socials";

const Insights = () => {
  return (
    <Box px={2} style={{ overflowY: "scroll", height: "100vh" }}>
      <InsightTopBar />
      <Typography my={2} variant="h6">
        Activity
      </Typography>
      <ImpressionGraph />
      <Typography my={2} variant="h6">
        Top Performers
      </Typography>
      <TopPerformers />
      <Typography my={2} variant="h6">
        Socials
      </Typography>
      <Socials />
    </Box>
  );
};

export default Insights;

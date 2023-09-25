import { Box, Card, CardContent, Typography } from "@mui/material";
import MoreTopBar from "./MoreTopBar";
import { LogoutOutlined } from "@mui/icons-material";

const More = () => {
  return (
    <>
      <MoreTopBar />
      <Box my={1}>
        <Card variant="outlined">
          <CardContent>
            <Typography display="flex">
              <LogoutOutlined /> <Typography pl={2}>Sign Out</Typography>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default More;

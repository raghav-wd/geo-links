import { Box, Card, CardContent, Typography } from "@mui/material";
import MoreTopBar from "./MoreTopBar";
import { LogoutOutlined } from "@mui/icons-material";

const More = () => {
  return (
    <Box mx={1}>
      <MoreTopBar />
      <Box my={1}>
        <Card variant="outlined">
          <CardContent>
            <Typography display="flex">
              {/* <LogoutOutlined />{" "} */}
              <Typography>Purchases and membership</Typography>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box my={1}>
        <Card variant="outlined">
          <CardContent>
            <Typography display="flex">
              {/* <LogoutOutlined />  */}
              <Typography>Sign Out</Typography>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default More;

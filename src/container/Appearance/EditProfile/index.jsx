import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";

const EditProfile = () => {
  return (
    <Box>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              src="https://ugc.production.linktr.ee/9e3a8815-6f31-4334-9188-4991541f1d34_untitled.png"
            />
          }
          title="@r.a.g.h.a._v"
          subheader="geo-link/r.a.g.h.a._v"
        />
        <CardContent>
          <Box my={2}>
            <TextField
              // id="outlined-required"
              label="Title"
              fullWidth
              defaultValue="r.a.g.h.a._v"
            />
          </Box>
          <Box my={2}>
            <TextField
              id="outlined-multiline-static"
              label="Bio"
              multiline
              rows={4}
              fullWidth
              defaultValue=""
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EditProfile;

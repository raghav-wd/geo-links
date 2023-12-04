import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ButtonStylePreview = ({ fill, shadow }) => {
  let heading = "Outline";
  if (fill) heading = "Fill";
  if (shadow) heading = "Shadow";
  return (
    <Box>
      <Typography>{heading}</Typography>
      <Grid container>
        <Grid>
          <Box>
            <Button>
              <Box
                m={1}
                style={{
                  border: "1px solid black",
                  width: "120px",
                  height: "32px",
                  boxShadow: shadow ? "5px 5px 3px 0 rgba(0,0,0,.25)" : "none",
                  backgroundColor: fill || shadow ? "#262626" : "none",
                }}
              ></Box>
            </Button>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <Button>
              <Box
                m={1}
                style={{
                  border: "1px solid black",
                  borderRadius: ".5rem",
                  width: "120px",
                  height: "32px",
                  boxShadow: shadow ? "5px 5px 3px 0 rgba(0,0,0,.25)" : "none",
                  backgroundColor: fill || shadow ? "#262626" : "none",
                }}
              ></Box>
            </Button>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <Button>
              <Box
                m={1}
                style={{
                  border: "1px solid black",
                  borderRadius: "9999px",
                  width: "120px",
                  height: "32px",
                  boxShadow: shadow ? "5px 5px 3px 0 rgba(0,0,0,.25)" : "none",
                  backgroundColor: fill || shadow ? "#262626" : "none",
                }}
              ></Box>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ButtonStylePreview;

import * as React from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Add, CloseRounded } from "@mui/icons-material";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useDispatch, useSelector } from "react-redux";
import screenLayer from "../../../constants/screen-layers";
import { addLayerScreen } from "../../../redux/reducers/app";

const SelectLayers = ({ handleClose }) => {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <>
      <DialogTitle style={{ borderBottom: "1px solid #515151" }} mx={1}>
        Add a new layer
        <IconButton
          aria-label="delete"
          style={{ float: "right" }}
          onClick={handleClose}
        >
          <CloseRounded />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container alignItems="center" spacing={0} my={1}>
          <Grid xs={10} lg={11}>
            <Typography fontWeight="bold">URL Layer</Typography>
            <Typography color="#515151">
              Link anywhere and everywhere. Add a single URL block to your page
              e.g. affiliate link
            </Typography>
          </Grid>
          <Grid xs={2} lg={1}>
            <Button
              variant="none"
              // startIcon={<Add />}
              onClick={() => dispatch(addLayerScreen(screenLayer.LINK))}
              style={{ color: "green" }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
        <Box>
          <Grid container alignItems="center" spacing={0} my={1}>
            <Grid xs={10} lg={11}>
              <Typography fontWeight="bold">Link Your Socials</Typography>
              <Typography color="#515151">
                Link your socials so your followers can easily find all of your
                content
              </Typography>
            </Grid>
            <Grid xs={2} lg={1}>
              <Button
                variant="none"
                // startIcon={<Add />}
                style={{ color: "green" }}
                onClick={() => dispatch(addLayerScreen(screenLayer.SOCIAL))}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={0} my={1}>
            <Grid xs={10} lg={11}>
              <Typography fontWeight="bold">Quote</Typography>
              <Typography color="#515151">
                Blend in a wise expression.
              </Typography>
            </Grid>
            <Grid xs={2} lg={1}>
              <Button
                variant="none"
                // startIcon={<Add />}
                onClick={() => dispatch(addLayerScreen(screenLayer.QUOTE))}
                style={{ color: "green" }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={0} my={1}>
            <Grid xs={10} lg={11}>
              <Typography fontWeight="bold">
                Exclusive Direct Messages
              </Typography>
              <Typography color="#515151">
                Enable your audience to message you, pose questions, seek
                advice, and engage in further interaction.
              </Typography>
            </Grid>
            <Grid xs={2} lg={1}>
              <Button
                variant="none"
                // startIcon={<Add />}
                onClick={() =>
                  dispatch(addLayerScreen(screenLayer.EXCLUSIVEDMS))
                }
                style={{ color: "green" }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </>
  );
};

export default SelectLayers;

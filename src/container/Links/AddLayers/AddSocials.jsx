import * as React from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Add,
  CloseRounded,
  Email,
  Facebook,
  Instagram,
  NavigateNextRounded,
  Pinterest,
  YouTube,
} from "@mui/icons-material";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const AddSocials = ({ handleClose }) => {
  return (
    <>
      <DialogTitle
        style={{ borderBottom: "1px solid #515151" }}
        mx={1}
        sx={{ minWidth: { lg: "400px" } }}
      >
        Add socials
        <IconButton
          aria-label="delete"
          style={{ float: "right" }}
          onClick={handleClose}
        >
          <CloseRounded />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography fontWeight="bold" my={2}>
          Social Networks
        </Typography>
        <Grid container my={1}>
          <Grid xs={2}>
            <Instagram fontSize="large" />
          </Grid>
          <Grid xs={8}>
            <Typography>Instagram</Typography>
          </Grid>
          <Grid xs={1} ml="auto">
            <NavigateNextRounded />
          </Grid>
        </Grid>
        <Grid container my={1}>
          <Grid xs={2}>
            <Facebook fontSize="large" />
          </Grid>
          <Grid xs={8}>
            <Typography>Facebook</Typography>
          </Grid>
          <Grid xs={1} ml="auto">
            <NavigateNextRounded />
          </Grid>
        </Grid>
        <Grid container my={1}>
          <Grid xs={2}>
            <Pinterest fontSize="large" />
          </Grid>
          <Grid xs={8}>
            <Typography>Pinterest</Typography>
          </Grid>
          <Grid xs={1} ml="auto">
            <NavigateNextRounded />
          </Grid>
        </Grid>
        <Grid container my={1}>
          <Grid xs={2}>
            <YouTube fontSize="large" />
          </Grid>
          <Grid xs={8}>
            <Typography>YouTube</Typography>
          </Grid>
          <Grid xs={1} ml="auto">
            <NavigateNextRounded />
          </Grid>
        </Grid>
        <Grid container my={1}>
          <Grid xs={2}>
            <Email fontSize="large" />
          </Grid>
          <Grid xs={8}>
            <Typography>Email</Typography>
          </Grid>
          <Grid xs={1} ml="auto">
            <NavigateNextRounded />
          </Grid>
        </Grid>
      </DialogContent>
    </>
  );
};

export default AddSocials;

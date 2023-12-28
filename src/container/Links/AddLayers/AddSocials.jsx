import * as React from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Add,
  DeleteOutlineRounded,
  CloseRounded,
  Email,
  Facebook,
  Instagram,
  AddRounded,
  Pinterest,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  DialogActions,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addSocial, removeSocial } from "../../../redux/reducers/link";
import socials from "../../../constants/socials";
import screenLayer from "../../../constants/screen-layers";
import { addLayerScreen } from "../../../redux/reducers/app";

const AddSocials = ({ handleClose }) => {
  const socialsState = useSelector((state) => state.link.socials);
  const dispatch = useDispatch();
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
            {socialsState.instagram.selected ? (
              <DeleteOutlineRounded
                onClick={() =>
                  dispatch(removeSocial({ social: socials.INSTAGRAM, url: "" }))
                }
              />
            ) : (
              <AddRounded
                onClick={() =>
                  dispatch(addSocial({ social: socials.INSTAGRAM, url: "" }))
                }
              />
            )}
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
            {socialsState.facebook.selected ? (
              <DeleteOutlineRounded
                onClick={() =>
                  dispatch(removeSocial({ social: socials.FACEBOOK, url: "" }))
                }
              />
            ) : (
              <AddRounded
                onClick={() =>
                  dispatch(addSocial({ social: socials.FACEBOOK, url: "" }))
                }
              />
            )}
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
            {socialsState.pinterest.selected ? (
              <DeleteOutlineRounded
                onClick={() =>
                  dispatch(removeSocial({ social: socials.PINTEREST, url: "" }))
                }
              />
            ) : (
              <AddRounded
                onClick={() =>
                  dispatch(addSocial({ social: socials.PINTEREST, url: "" }))
                }
              />
            )}
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
            {socialsState.youtube.selected ? (
              <DeleteOutlineRounded
                onClick={() =>
                  dispatch(removeSocial({ social: socials.YOUTUBE, url: "" }))
                }
              />
            ) : (
              <AddRounded
                onClick={() =>
                  dispatch(addSocial({ social: socials.YOUTUBE, url: "" }))
                }
              />
            )}
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
            {socialsState.email.selected ? (
              <DeleteOutlineRounded
                onClick={() =>
                  dispatch(removeSocial({ social: socials.EMAIL, url: "" }))
                }
              />
            ) : (
              <AddRounded
                onClick={() =>
                  dispatch(addSocial({ social: socials.EMAIL, url: "" }))
                }
              />
            )}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => dispatch(addLayerScreen(screenLayer.SOCIALSLINK))}
        >
          Next
        </Button>
      </DialogActions>
    </>
  );
};

export default AddSocials;

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
import { addLayerScreen } from "../../../redux/reducers/app";
import screenLayer from "../../../constants/screen-layers";

const AddSocialsLink = ({ handleClose }) => {
  const socialsState = useSelector((state) => state.link.socials);
  const dispatch = useDispatch();
  const icons = [];

  return (
    <>
      <DialogTitle
        style={{ borderBottom: "1px solid #515151" }}
        mx={1}
        sx={{ minWidth: { lg: "400px" } }}
      >
        Add Links to your socials
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
          {/* {Object.keys(socialsState).forEach(function (key, index) {
            if (socialsState[key].selected) icons.push(fetchIcon(key));
          })}
          {icons.map((icon) => (
            <Box p={1}>{icon}</Box>
          ))} */}
        </Typography>
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

export default AddSocialsLink;

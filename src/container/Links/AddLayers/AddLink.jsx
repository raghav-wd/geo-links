import * as React from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { v4 as uuid } from "uuid";
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
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useDispatch, useSelector } from "react-redux";
import { addLink } from "../../../redux/reducers/link";

const AddLink = ({ handleClose }) => {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [url, setURL] = React.useState("");
  const [title, setTitle] = React.useState("");
  return (
    <>
      <DialogTitle
        style={{ borderBottom: "1px solid #515151" }}
        mx={1}
        sx={{ minWidth: { lg: "400px" } }}
      >
        Add a Link
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
          <Typography mt={3} mb={1}>
            URL
          </Typography>
          <TextField
            id="new-url"
            label=""
            variant="outlined"
            fullWidth
            onChange={(e) => setURL(e.target.value)}
          />
          <Typography mt={3} mb={1}>
            Link Title
          </Typography>
          <TextField
            id="new-title"
            label=""
            variant="outlined"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => dispatch(addLink({ link: url, name: title }))}>
          Done
        </Button>
      </DialogActions>
    </>
  );
};

export default AddLink;

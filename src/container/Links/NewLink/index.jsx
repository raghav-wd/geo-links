import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Add, CloseRounded } from "@mui/icons-material";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import SelectLayers from "../AddLayers/SelectLayers";
import AddSocials from "../AddLayers/AddSocials";
import screenLayer from "../../../constants/screen-layers";
import AddLayers from "../AddLayers";
import { useDispatch, useSelector } from "react-redux";
import { addLayerScreen, addModalHandler } from "../../../redux/reducers/app";

export default function NewLink() {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const desktop = useMediaQuery("(min-width:600px)");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    dispatch(addLayerScreen(screenLayer.SELECT));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    dispatch(addModalHandler(handleClickOpen));
  }, []);
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<Add />}
        sx={{ textTransform: "none" }}
        onClick={handleClickOpen}
        fullWidth
      >
        Build your page and add a new block
      </Button>
      {desktop ? (
        <Dialog open={open} onClose={handleClose} maxWidth="xl">
          <AddLayers handleClose={handleClose} />
        </Dialog>
      ) : (
        <FullScreenDialog open={open} setOpen={setOpen} />
      )}
    </div>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function FullScreenDialog({ open, setOpen }) {
  const app = useSelector((state) => state.app);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AddLayers handleClose={handleClose} />
      </Dialog>
    </React.Fragment>
  );
}

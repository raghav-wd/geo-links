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
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addLayerScreen } from "../../../redux/reducers/app";
import screenLayer from "../../../constants/screen-layers";
import { addSocialLink } from "../../../redux/reducers/link";
import socials from "../../../constants/socials";

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
          {socialsState.instagram.selected ? (
            <>
              <Typography mt={3} mb={1}>
                Instagram
              </Typography>
              <TextField
                id="new-url"
                label=""
                variant="outlined"
                fullWidth
                defaultValue={socialsState.instagram.url}
                onChange={(e) =>
                  dispatch(
                    addSocialLink({
                      social: socials.INSTAGRAM,
                      url: e.target.value,
                    })
                  )
                }
              />
            </>
          ) : (
            ""
          )}
        </Typography>
        <Typography fontWeight="bold" my={2}>
          {socialsState.facebook.selected ? (
            <>
              <Typography mt={3} mb={1}>
                Facebook
              </Typography>
              <TextField
                id="new-url"
                label=""
                variant="outlined"
                fullWidth
                defaultValue={socialsState.facebook.url}
                onChange={(e) =>
                  dispatch(
                    addSocialLink({
                      social: socials.FACEBOOK,
                      url: e.target.value,
                    })
                  )
                }
              />
            </>
          ) : (
            ""
          )}
        </Typography>
        <Typography fontWeight="bold" my={2}>
          {socialsState.pinterest.selected ? (
            <>
              <Typography mt={3} mb={1}>
                Pinterest
              </Typography>
              <TextField
                id="new-url"
                label=""
                variant="outlined"
                fullWidth
                defaultValue={socialsState.pinterest.url}
                onChange={(e) =>
                  dispatch(
                    addSocialLink({
                      social: socials.PINTEREST,
                      url: e.target.value,
                    })
                  )
                }
              />
            </>
          ) : (
            ""
          )}
        </Typography>
        <Typography fontWeight="bold" my={2}>
          {socialsState.youtube.selected ? (
            <>
              <Typography mt={3} mb={1}>
                Youtube
              </Typography>
              <TextField
                id="new-url"
                label=""
                variant="outlined"
                fullWidth
                defaultValue={socialsState.youtube.url}
                onChange={(e) =>
                  dispatch(
                    addSocialLink({
                      social: socials.YOUTUBE,
                      url: e.target.value,
                    })
                  )
                }
              />
            </>
          ) : (
            ""
          )}
        </Typography>
        <Typography fontWeight="bold" my={2}>
          {socialsState.email.selected ? (
            <>
              <Typography mt={3} mb={1}>
                Email
              </Typography>
              <TextField
                id="new-url"
                label=""
                variant="outlined"
                fullWidth
                defaultValue={socialsState.email.url}
                onChange={(e) =>
                  dispatch(
                    addSocialLink({
                      social: socials.EMAIL,
                      url: e.target.value,
                    })
                  )
                }
              />
            </>
          ) : (
            ""
          )}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Next</Button>
      </DialogActions>
    </>
  );
};

export default AddSocialsLink;

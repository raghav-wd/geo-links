import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setBio } from "../../../redux/reducers/user";
import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

const EditProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [profImg, setProfImg] = useState(null);
  const handlerImageUpload = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setProfImg(URL.createObjectURL(img));
    }
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <Box>
      <form onSubmit={handlerImageUpload} style={{ position: "relative" }}>
        <Grid container alignItems="center">
          <CardHeader
            avatar={
              <Avatar
                sx={{ width: 56, height: 56 }}
                aria-label="recipe"
                src={
                  profImg
                    ? profImg
                    : "https://ugc.production.linktr.ee/9e3a8815-6f31-4334-9188-4991541f1d34_untitled.png"
                }
              />
            }
            title="Change your picture"
          />
          <Button
            style={{
              width: "212px",
              height: "68px",
              position: "absolute",
              top: "10px",
              left: "12px",
              // borderRight: "2px solid gray",
            }}
            component="label"
            // variant="outlined"
          >
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handlerImageUpload(e)}
            />
          </Button>
          <Button type="submit" variant="outlined" style={{ height: "48px" }}>
            Upload
          </Button>
        </Grid>
      </form>
      <CardContent>
        <Box my={2}>
          <TextField
            id="outlined-multiline-static"
            label="Bio"
            multiline
            rows={1}
            fullWidth
            onChange={(e) => dispatch(setBio(e.target.value))}
            defaultValue={user.bio}
          />
        </Box>
      </CardContent>
    </Box>
  );
};

export default EditProfile;

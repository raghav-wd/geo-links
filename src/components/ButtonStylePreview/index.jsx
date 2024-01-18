import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useDispatch, useSelector } from "react-redux";
import {
  styleFillButton,
  styleBorderButton,
  styleShadowButton,
} from "../../redux/reducers/style";
import { useEffect } from "react";

const ButtonStylePreview = ({ fill = false, shadow = false, active }) => {
  let heading = "Outline";
  if (fill) heading = "Fill";
  if (shadow) heading = "Shadow";
  const style = useSelector((state) => state.style.data);
  const dispatch = useDispatch();
  return (
    <Box>
      <Typography>{heading}</Typography>
      <Grid container>
        <Box>
          <Button
            style={{
              backgroundColor:
                active && style.button.border == "none"
                  ? "rgb(200, 200, 200, 0.5)"
                  : null,
            }}
            onClick={() => {
              dispatch(styleFillButton(fill));
              dispatch(styleShadowButton(shadow));
              dispatch(styleBorderButton("none"));
            }}
          >
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
        <Box>
          <Button
            style={{
              backgroundColor:
                active && style.button.border == "square" ? "#ebc86c" : null,
            }}
            onClick={() => {
              dispatch(styleFillButton(fill));
              dispatch(styleShadowButton(shadow));
              dispatch(styleBorderButton("square"));
            }}
          >
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
        <Box>
          <Button
            style={{
              backgroundColor:
                active && style.button.border == "round" ? "#ebc86c" : null,
            }}
            onClick={() => {
              dispatch(styleFillButton(fill));
              dispatch(styleShadowButton(shadow));
              dispatch(styleBorderButton("round"));
            }}
          >
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
    </Box>
  );
};

export default ButtonStylePreview;

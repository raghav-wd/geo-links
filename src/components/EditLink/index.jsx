import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import { memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  Switch,
  Typography,
} from "@mui/material";
import {
  DeleteOutline,
  DragIndicator,
  ModeEditOutlineOutlined,
  PushPinOutlined,
  Schedule,
  Terrain,
} from "@mui/icons-material";
import styled from "@emotion/styled";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const CardBlock = ({ data }) => (
  <React.Fragment>
    <CardContent>
      <Grid container>
        <Grid xs={1} display="flex" style={{ alignItems: "center" }}>
          <DragIndicator />
        </Grid>
        <Grid xs={11} pl={1}>
          <Box style={{ display: "flex" }}>
            <Typography pr={1} gutterBottom>
              {data.name}
            </Typography>
            <ModeEditOutlineOutlined fontSize="small" />
          </Box>
          <Box style={{ display: "flex" }}>
            <Typography pr={1} gutterBottom>
              {data.link}
            </Typography>
            <ModeEditOutlineOutlined fontSize="small" />
          </Box>
          {/* <FormControl sx={{ m: 0.4 }} variant="standard">
            <Input
              id="standard-adornment-password"
              type="text"
              defaultValue="Google"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <ModeEditOutlineOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ m: 0.4 }} variant="standard">
            <Input
              id="standard-adornment-password"
              type="text"
              defaultValue="https://google.com"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <ModeEditOutlineOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl> */}
        </Grid>
      </Grid>
    </CardContent>
    <CardActions>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        <Grid xs={1} />
        <Grid xs={9}>
          <IconButton aria-label="toggle password visibility">
            <Schedule />
          </IconButton>
          <IconButton aria-label="toggle password visibility">
            <Terrain />
          </IconButton>
          <IconButton aria-label="toggle password visibility">
            <PushPinOutlined />
          </IconButton>
          <IconButton aria-label="toggle password visibility">
            <DeleteOutline />
          </IconButton>
        </Grid>
        <Grid xs={2} display="flex" style={{ justifyContent: "right" }}>
          <Android12Switch defaultChecked />
        </Grid>
      </Grid>
    </CardActions>
  </React.Fragment>
);

const EditLink = memo(function EditLink({ id, moveCard, findCard, data }) {
  const style = {
    cursor: "move",
  };
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "Card",
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveCard]
  );
  const [, drop] = useDrop(
    () => ({
      accept: "Card",
      hover({ id: draggedId }) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );
  const opacity = isDragging ? 0 : 1;

  return (
    <Box
      sx={{ minWidth: 275 }}
      ref={(node) => drag(drop(node))}
      style={{ ...style, opacity }}
      my={1}
    >
      <Card variant="outlined">
        <CardBlock data={data} />
      </Card>
    </Box>
  );
});

export default EditLink;

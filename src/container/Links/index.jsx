import {
  Add,
  ArrowOutwardRounded,
  DoneOutlineRounded,
  DoneRounded,
} from "@mui/icons-material";
import LinksView from "../../components/LinksView";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { AddLinkButton } from "./AddLinkButton";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Render } from "../Render";
import { useSelector } from "react-redux";
import { updateUserStyles } from "../../services/styles";
import { themeType } from "../../constants/themes";
import EmulatorTopBar from "../../components/EmulatorTopBar";

const Links = () => {
  const desktop = useMediaQuery("(min-width:600px)");

  return (
    <Box mx={1}>
      <Grid container spacing={1}>
        <Grid xs={12} md={8} height="100vh" style={{ overflowY: "scroll" }}>
          <AddLinkButton />
          <Box height="100%">
            <LinksView />
          </Box>
        </Grid>
        <Grid
          xs={0}
          md={4}
          container
          justifyContent="center"
          alignContent="center"
          flexDirection="column"
          style={{
            height: "100vh",
          }}
        >
          <EmulatorTopBar />
          {desktop ? (
            <Box
              style={{
                border: "10px solid black",
                borderRadius: "20px",
                height: "70%",
                width: "300px",
                overflowY: "scroll",
              }}
            >
              <Render emulated />
            </Box>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Links;

import { Add } from "@mui/icons-material";
import LinksView from "../../components/LinksView";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box } from "@mui/material";
import { AddLinkButton } from "./AddLinkButton";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PreviewButton from "./PreviewButton";
import { Render } from "../Render";
import Sidebar from "../../components/Sidebar";

const Links = () => {
  return (
    <Box mx={1}>
      <Grid container spacing={1}>
        <Grid xs={12} md={8} height="100vh">
          {/* add view preview btn */}
          {/* <Grid container spacing={2}>
            <Grid xs={4}>
              <AddLinkButton />
            </Grid>
            <Grid xs={4}>
              <PreviewButton />
            </Grid>
          </Grid> */}
          <Box height="100%" style={{ background: "white" }}>
            <DndProvider backend={HTML5Backend}>
              <LinksView />
            </DndProvider>
          </Box>
        </Grid>
        <Grid xs={0} md={4} style={{ background: "white" }}></Grid>
      </Grid>
    </Box>
  );
};

export default Links;

import { Add } from "@mui/icons-material";
import LinksView from "../../components/LinksView";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box } from "@mui/material";
import { AddLinkButton } from "./AddLinkButton";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PreviewButton from "./PreviewButton";

const Links = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid sx={4}>
          <AddLinkButton />
        </Grid>
        <Grid sx={4}>
          <PreviewButton />
        </Grid>
      </Grid>
      <DndProvider backend={HTML5Backend}>
        <LinksView />
      </DndProvider>
    </Box>
  );
};

export default Links;

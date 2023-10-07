import { Add } from "@mui/icons-material";
import LinksView from "../../components/LinksView";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box } from "@mui/material";
import { AddLinkButton } from "./AddLinkButton";

const Links = () => {
  return (
    <Box>
      <AddLinkButton />
      <DndProvider backend={HTML5Backend}>
        <LinksView />
      </DndProvider>
    </Box>
  );
};

export default Links;

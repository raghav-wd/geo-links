import { Add } from "@mui/icons-material";
import LinksView from "../../components/LinksView";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box, useMediaQuery } from "@mui/material";
import { AddLinkButton } from "./AddLinkButton";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Render } from "../Render";

const Links = () => {
  const desktop = useMediaQuery("(min-width:600px)");

  return (
    <Box mx={1}>
      <Grid container spacing={1}>
        <Grid xs={12} md={8} height="100vh">
          <AddLinkButton />
          <Box height="100%" style={{ background: "white" }}>
            <LinksView />
          </Box>
        </Grid>
        <Grid
          xs={0}
          md={4}
          style={{
            background: "white",
            position: "fixed",
            height: "100vh",
            width: "inherit",
            right: 0,
          }}
        >
          {desktop ? <Render /> : null}
          {/* <iframe
            src="/render"
            style={{ width: "100%", height: "96vh" }}
            title="Estring renderer"
          ></iframe> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Links;

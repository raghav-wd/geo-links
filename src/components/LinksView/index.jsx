import EditLink from "../Layers/EditLink";
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { updateList } from "../../redux/reducers/link";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import SocialLayer from "../Layers/SocialLayer";
import layerTypes from "../../constants/layerTypes";
import TextLayer from "../Layers/TextLayer";

const LinksView = memo(function LinksView() {
  const style = {};
  const link = useSelector((state) => state.link);
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(link.list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(updateList(items));
  };

  const switchLayer = (item, index) => {
    switch (item.type) {
      case layerTypes.LINK:
        return <EditLink data={item} index={index} key={item.id} />;
      case layerTypes.SOCIAL:
        return <SocialLayer data={item} index={index} key={item.id} />;
      case layerTypes.TEXT:
        return <TextLayer data={item} index={index} key={item.id} />;
    }
  };

  return (
    <Box pb={8}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="links">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {console.log(link.list)}
              {link.list.map((item, index) => switchLayer(item, index))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {link.list.length == 0 ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="60vh"
        >
          <Typography
            fontSize="36px"
            sx={{
              opacity: 0.1,
              textAlign: "center",
              userSelect: "none",
            }}
          >
            Let's start by adding your first block.
          </Typography>
        </Grid>
      ) : null}
    </Box>
  );
});
export default LinksView;

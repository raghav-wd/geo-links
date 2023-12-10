import update from "immutability-helper";
import EditLink from "../EditLink";
import { memo, useCallback, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { updateList } from "../../redux/reducers/link";
import { v4 as uuid } from "uuid";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { AddLinkButton } from "../../container/Links/AddLinkButton";
import SocialIcons from "../SocialIcons";
import { addLayerScreen } from "../../redux/reducers/app";
import screenLayer from "../../constants/screen-layers";

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

  return (
    <Box pb={8}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="links">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {console.log(link.list)}
              {link.list.map((item, index) =>
                item.id == "social" ? (
                  <Draggable
                    draggableId={"x-" + index}
                    index={index}
                    key={item.id}
                  >
                    {(provided) => (
                      <Box
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        xs={{ minWidth: 275 }}
                        my={0.4}
                      >
                        <Card
                          variant="none"
                          style={{ padding: "12px 32px" }}
                          onClick={() => {
                            app.Modal();
                            dispatch(addLayerScreen(screenLayer.SOCIAL));
                          }}
                        >
                          <Typography fontWeight={600} color="#515151">
                            Add social links
                          </Typography>
                          <Typography fontSize={14}>
                            Instagram, Youtube, Twitter...
                          </Typography>
                        </Card>
                      </Box>
                    )}
                  </Draggable>
                ) : (
                  <EditLink data={item} index={index} key={item.id} />
                )
              )}

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

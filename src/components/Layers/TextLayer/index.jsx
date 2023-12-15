import { Box, Card, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const TextLayer = ({ data, index }) => {
  return (
    <Draggable draggableId={"x-" + index} index={index} key={index}>
      {(provided) => (
        <Box
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          xs={{ minWidth: 275 }}
          my={0.4}
        >
          <Card variant="none" style={{ padding: "12px 32px" }}>
            <div
              style={{ color: data.color }}
              dangerouslySetInnerHTML={{ __html: data.text }}
            ></div>
          </Card>
        </Box>
      )}
    </Draggable>
  );
};

export default TextLayer;

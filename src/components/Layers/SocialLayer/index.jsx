import { Box, Card, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addLayerScreen } from "../../../redux/reducers/app";
import screenLayer from "../../../constants/screen-layers";

const SocialLayer = ({ data, index }) => {
  const link = useSelector((state) => state.link);
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();
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
  );
};

export default SocialLayer;

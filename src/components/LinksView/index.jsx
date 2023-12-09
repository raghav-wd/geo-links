import update from "immutability-helper";
import EditLink from "../EditLink";
import { memo, useCallback, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { updateList } from "../../redux/reducers/link";
import { v4 as uuid } from "uuid";

const LinksView = memo(function LinksView() {
  const style = {};
  const link = useSelector((state) => state.link);
  const dispatch = useDispatch();
  const ITEMS = [
    {
      id: 1,
      name: "Vinay",
      link: "https://www.instagram.com/vin.vis_30/",
    },
    {
      id: 2,
      name: "Rishi",
      link: "https://www.instagram.com/mr._r_i_s_h_i_/",
    },
    {
      id: 3,
      name: "Raghav",
      link: "https://www.instagram.com/r.a.g.h.a._v/",
    },
  ];

  const [ite, setItem] = useState(ITEMS);
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(link.list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(updateList(items));
  };
  useEffect(() => console.log(ite), [ite]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="links">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {link.list.map((item, index) => (
              <EditLink data={item} index={index} key={item.id} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});
export default LinksView;

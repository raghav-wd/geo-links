import LinksView from "../../components/LinksView";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Links = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <LinksView />
    </DndProvider>
  );
};

export default Links;

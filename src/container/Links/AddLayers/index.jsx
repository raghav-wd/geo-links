import { useDispatch, useSelector } from "react-redux";
import SelectLayers from "./SelectLayers";
import screenLayer from "../../../constants/screen-layers";
import AddSocials from "./AddSocials";
import AddExclusiveDM from "./AddExclusiveDM";
import AddLink from "./AddLink";
import AddQuote from "./AddQuote";

const AddLayers = ({ handleClose }) => {
  const app = useSelector((state) => state.app);
  if (app.addLayerScreenType == screenLayer.SELECT)
    return <SelectLayers handleClose={handleClose} />;
  if (app.addLayerScreenType == screenLayer.SOCIAL)
    return <AddSocials handleClose={handleClose} />;
  if (app.addLayerScreenType == screenLayer.QUOTE)
    return <AddQuote handleClose={handleClose} />;
  if (app.addLayerScreenType == screenLayer.LINK)
    return <AddLink handleClose={handleClose} />;
  if (app.addLayerScreenType == screenLayer.EXCLUSIVEDMS)
    return <AddExclusiveDM handleClose={handleClose} />;
  return <>404 Not Found</>;
};

export default AddLayers;

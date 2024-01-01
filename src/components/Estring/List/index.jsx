import layerTypes from "../../../constants/layerTypes";
import { Link } from "../../../container/Render/Layers/Link";
import SocialIcons from "../../../container/Render/Layers/SocialIcons";
import TextLayer from "../../../container/Render/Layers/TextLayer";

const List = ({ list }) => {
  const renderList = (item) => {
    switch (item.type) {
      case layerTypes.LINK:
        return <Link title={item.name} link={item.link} hidden={item.hidden} />;
      case layerTypes.SOCIAL:
        return <SocialIcons />;
      case layerTypes.TEXT:
        return <TextLayer text={item.text} color={item.color} />;
    }
  };
  return list.map((item) => renderList(item));
};

export default List;

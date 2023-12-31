import { useParams } from "react-router-dom";
import { Render } from "../Render";

const Estring = () => {
  let { estring } = useParams();
  return (
    <div>
      <Render estring={estring} />
    </div>
  );
};

export default Estring;

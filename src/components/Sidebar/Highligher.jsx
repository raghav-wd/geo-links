import { useSelector } from "react-redux";
import styles from "./styles.module.css";

const Highlighter = () => {
  const app = useSelector((state) => state.app);
  const pageList = {
    links: 1,
    appearance: 2,
    insights: 3,
    more: 4,
  };
  return (
    <span
      id="highlighter"
      style={{
        width: "92%",
        height: "36.5px",
        border: "1px solid gray",
        borderRadius: "4px",
        // backgroundColor: "#EDF2F6",
        // boxShadow:
        //   "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        position: "absolute",
        zIndex: 4,
        transition: "transform 0.15s ease-out",
        transform: `translateY(calc((100% * ${pageList[app.page]}) + 6px)`,
      }}
    ></span>
  );
};

export default Highlighter;

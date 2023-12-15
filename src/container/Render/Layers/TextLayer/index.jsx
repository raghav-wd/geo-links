import { Box, Typography } from "@mui/material";

const TextLayer = ({ text, color }) => {
  return (
    <div style={{ color }} dangerouslySetInnerHTML={{ __html: text }}></div>
  );
};

export default TextLayer;

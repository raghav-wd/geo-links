import { Box, Typography } from "@mui/material";

const Footer = ({ emulated, style }) => {
  return (
    <Typography
      py={4}
      style={{
        fontFamily: "monospace",
        textAlign: "center",
        fontWeight: "bold",
        userSelect: "none",
        color: style.page.color,
      }}
    >
      Powered by <i>Estring</i>
    </Typography>
  );
};

export default Footer;

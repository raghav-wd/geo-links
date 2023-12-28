import { Card, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import openInNewTab from "../../../../utils/openInNewTab";

export const Link = ({ title, link, hidden }) => {
  const style = useSelector((state) => state.style);
  const dispatch = useDispatch();
  let opacity = 0;
  if (style.button.transparency == 0) opacity = "FF";
  else if (style.button.transparency == 20) opacity = "50";
  else if (style.button.transparency == 50) opacity = "80";
  else opacity = "C0";

  let borderRadius = 0;
  if (style.button.border == "square") borderRadius = ".5rem";
  if (style.button.border == "round") borderRadius = "9999px";

  if (hidden) return;
  return (
    <div className="r-link">
      <Card
        sx={{
          marginBottom: "12px",
          width: "100%",
          borderRadius,
          border: `1px solid ${style.button.color}`,
          boxShadow: style.button.shadow
            ? "5px 5px 3px 0 rgba(0,0,0,.25)"
            : "none",
          backgroundColor:
            style.button.fill || style.button.shadow
              ? style.button.color + opacity
              : "#00000000",
        }}
        onClick={() => openInNewTab(link)}
      >
        <CardContent style={{ padding: "16px" }}>
          <Typography
            variant="body2"
            style={{
              fontFamily: style.text.fontFamily,
              color: style.text.color,
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

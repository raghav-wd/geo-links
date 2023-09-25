import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MoreTopBar() {
  return (
    <Card my={3} variant="none">
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src="https://ugc.production.linktr.ee/9e3a8815-6f31-4334-9188-4991541f1d34_untitled.png"
          />
        }
        title="@r.a.g.h.a._v"
        subheader="geo-link/r.a.g.h.a._v"
      />
    </Card>
  );
}

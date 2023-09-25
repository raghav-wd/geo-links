import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import { AddLink, Insights, MoreHoriz, Palette } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleClick(e) {
    switch (e) {
      case 0:
        navigate("/");
        return;
      case 1:
        navigate("/appearance");
        return;
      case 2:
        navigate("/insights");
        return;
      case 3:
        navigate("/more");
        return;
    }
  }
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
        aria-label="icon label tabs example"
      >
        <Tab
          wrapped
          icon={<AddLink />}
          label="Links"
          onClick={() => handleClick(0)}
        />

        <Tab
          wrapped
          icon={<Palette />}
          label="Appearance"
          onClick={() => handleClick(1)}
        />

        <Tab
          wrapped
          icon={<Insights />}
          label="Insights"
          onClick={() => handleClick(2)}
        />
        <Tab
          wrapped
          icon={<MoreHoriz />}
          label="More"
          onClick={() => handleClick(3)}
        />
      </Tabs>
    </Box>
  );
};

export default TopNav;

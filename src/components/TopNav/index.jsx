import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { AddLink, Insights, MoreHoriz, Palette } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopNav = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleClick(e) {
    switch (e) {
      case 0:
        navigate("");
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
      {/* <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation> */}
    </Box>
  );
};

export default TopNav;

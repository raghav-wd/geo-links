import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import TopNav from "./components/TopNav";
import { Route, Routes, useLocation } from "react-router-dom";
import Links from "./container/Links";
import Appearance from "./container/Appearance";
import Insights from "./container/Insights";
import More from "./container/More";
import { Box } from "@mui/material";
import Login from "./container/Login";
import { Render } from "./container/Render";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  const location = useLocation();
  const renderTopnav = () => {
    if (
      ["/", "/appearance", "/insights", "/more"].indexOf(location.pathname) > -1
    )
      return <TopNav />;
  };
  return (
    <ThemeProvider theme={theme}>
      {renderTopnav()}
      <Box px={1}>
        <Routes>
          <Route index element={<Links />} />
          <Route path="/appearance" element={<Appearance />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/more" element={<More />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/render" element={<Render />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

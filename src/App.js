import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import TopNav from "./components/TopNav";
import { Route, Routes } from "react-router-dom";
import Links from "./container/Links";
import Appearance from "./container/Appearance";
import Insights from "./container/Insights";
import More from "./container/More";
import { Box } from "@mui/material";

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

  return (
    <ThemeProvider theme={theme}>
      <TopNav />
      <Box p={1}>
        <Routes>
          <Route index path="/" element={<Links />} />
          <Route path="/appearance" element={<Appearance />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
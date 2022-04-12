import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CommonAppBar from "../common/CommonAppBar";
import CommonDrawer from "../common/CommonDrawer";
import CommonHeadTag, { HeadTagMeta } from "./CommonHeadTag";

const theme = createTheme();

interface PCLayoutProps {
  children: React.ReactNode;
  meta: HeadTagMeta;
}

// Common layout for PC display
// Layout with common parts like headers and footers
const PCLayout: React.FC<PCLayoutProps> = (props: PCLayoutProps) => {
  
  const {
    children,
    meta,
  } = props

  const [open, setOpen] = React.useState(false);
  const drawerWidth = 240;

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CommonHeadTag meta={meta} />
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <CommonAppBar
            open={open}
            drawerWidth={drawerWidth}
            toggleDrawer={toggleDrawer}
          />
          <CommonDrawer 
            open={open}
            drawerWidth={drawerWidth}
            toggleDrawer={toggleDrawer}
          />
          {children}
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default PCLayout;

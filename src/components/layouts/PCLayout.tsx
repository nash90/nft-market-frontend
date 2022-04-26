import React from "react";
import { Box, CssBaseline } from "@mui/material";

import CommonAppBar from "../common/CommonAppBar";
import CommonDrawer from "../common/CommonDrawer";
import CommonHeadTag, { HeadTagMeta } from "./CommonHeadTag";

interface PCLayoutProps {
  children: React.ReactNode;
  meta: HeadTagMeta;
}

// Common layout for PC display
// Layout with common parts like headers and footers
const PCLayout: React.FC<PCLayoutProps> = (props: PCLayoutProps) => {
  const { children, meta } = props;

  const [open, setOpen] = React.useState(false);
  const drawerWidth = 240;

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <CommonHeadTag meta={meta} />
      <Box sx={{ display: "flex" }}>
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
    </div>
  );
};

export default PCLayout;

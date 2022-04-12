import React from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

interface PCLayoutProps {
  children: React.ReactNode;
}

// Common layout for PC display
// Layout with common parts like headers and footers
const PCLayout: React.FC<PCLayoutProps> = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          {/* Header */}
          {children}
          {/* Footer */}
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default PCLayout;

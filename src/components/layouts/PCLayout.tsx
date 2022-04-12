import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CommonHeadTag meta={meta} />
        <Container component="main" maxWidth="xs">
          {children}
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default PCLayout;

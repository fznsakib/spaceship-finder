import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

const StylesDecorator = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);

export default StylesDecorator;

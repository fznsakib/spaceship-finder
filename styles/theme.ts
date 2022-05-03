const SPACING_MULTIPLIER = 4;

export const theme = {
  palette: {
    primary: "#009DDC",
    secondary: "#F26430",
    background: "#FFFFFF",
    // paper: "#EAEAEA",
    paper: "#ffecb8",
    dropdown: "#FFFFFF",
    border: "#009DDC",
    button: "#D6F3FF",
  },
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1536px",
  },
  spacing: (value: number) => `${value * SPACING_MULTIPLIER}px`,
};

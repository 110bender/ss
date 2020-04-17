import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "rgba(244, 247, 252, 1)" },
    primary: {
      light: "rgba(244, 247, 252, 1)",
      main: "rgba(118, 160, 230, 1)",
      dark: "rgba(108, 143, 224, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(173, 231, 240, 1)",
      main: "rgba(118, 215, 230, 1)",
      dark: "rgba(0, 187, 211, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(134, 141, 149, 1)",
      secondary: "rgba(180, 185, 189, 1)",
      disabled: "rgba(0, 0, 0, 1)",
      hint: "rgba(180, 185, 189, 1)",
    },
  },
  shape: {
    borderRadius: "1em",
  },
  typography: {
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2em",
    },
    h4: {
      fontSize: "1.5em",
    },
    h5: {
      fontSize: "1em",
      fontWeight: "bold",
    },
    h6: {
      fontSize: ".7em",
      fontWeight: "bold",
    },
  },
});
export default theme;

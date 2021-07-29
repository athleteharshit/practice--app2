import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FFC288",
      main: "#FEA82F",
      dark: "#FF6701",
    },
    secondary: {
      light: " rgb(232, 245, 251)",
      main: "#71C9CE",
      dark: "#1597BB",
    },
  },
  spacing: 10,
});

export default theme;

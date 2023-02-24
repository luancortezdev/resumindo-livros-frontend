import { createTheme } from "@mui/material";
import { grey, cyan, blue,  } from "@mui/material/colors"

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      dark: blue[800],
      light: blue[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e65100",
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#ffffff"
    },
    background: {
      paper: "#ffffff",
      default: "#f7f6f3"
    }
  }
})
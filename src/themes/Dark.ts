import { createTheme } from "@mui/material";
import { grey, cyan, blue } from "@mui/material/colors"

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: grey[700],
      dark: grey[800],
      light: grey[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: blue[900],
      dark: blue[400],
      light: blue[300],
      contrastText: "#ffffff"
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }
  }
})
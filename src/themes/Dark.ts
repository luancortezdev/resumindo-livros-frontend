import { createTheme } from "@mui/material";
import { grey, cyan } from "@mui/material/colors"

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: grey[700],
      dark: grey[800],
      light: grey[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#ffffff"
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }
  }
})
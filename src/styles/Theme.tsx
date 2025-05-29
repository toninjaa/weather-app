import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    background: {
      default: '#E5A892',
    },
    primary: {
      main: '#54B2FF',
      dark: '#3E91D5',
      light: '#ADD0ED',
    },
    secondary: {
      main: '#ec8c69',
      dark: '#C46F50',
      light: '#E5A892',
    },
  },
  typography: {
    fontFamily: [
      "Georama", 'serif'
    ].join(',')
  }
})

export default Theme;
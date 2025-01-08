import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: '#54B2FF',
      dark: '#0060c8',
      light: '#b8ddff',
    },
    secondary: {
      main: '#ffd466',
      dark: '#f8884f',
      light: '#ffdd7a',
    },
  },
  typography: {
    fontFamily: [
      'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif'].join(',')
  }
})

export default Theme;
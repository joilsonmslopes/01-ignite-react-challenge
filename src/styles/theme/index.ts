import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#262626',
      light: '#808080',
      contrastText: '#f2f2f2',
      dark: '#0d0d0d',
    },
    secondary: {
      main: '#4ea8de',
      dark: '#1e6f9f',
    },
    error: {
      main: '#E25858',
    },
  },
})

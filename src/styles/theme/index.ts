import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#8284fa',
      contrastText: '#f2f2f2',
    },
    secondary: {
      main: '#4ea8de',
      dark: '#1e6f9f',
    },
    error: {
      main: '#E25858',
    },
    grey: {
      100: '#f2f2f2',
      200: '#d9d9d9',
      300: '#808080',
      400: '#333333',
      500: '#262626',
      600: '#1a1a1a',
      700: '#0d0d0d',
    },
    common: {
      white: '#ffffff',
      black: '#000000',
    },
    background: {
      default: '#1a1a1a',
    },
  },
})

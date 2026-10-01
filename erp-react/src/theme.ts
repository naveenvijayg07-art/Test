import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#09090b',
      paper: '#0f0f13',
    },
    primary: {
      main: '#a78bfa',
    },
  },
});

import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3399FF',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      secondary: '#3399FF',
    },
  },
  typography: {
    h1: {
      color: '#3399FF',
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h3: {
      color: '#3399FF',
      fontSize: '1.7rem',
      fontWeight: 500,
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    subtitle1: {
      fontSize: '1.2rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontWeight: 400,
      // textDecoration: 'underline',
      fontSize: '0.875rem',
      letterSpacing: '0.01071em',
      // color: '#3399FF',
    },
    body1: {
      fontSize: '0.8rem',
    },
  },
});

export default theme;

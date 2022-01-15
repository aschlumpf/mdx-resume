import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(54, 156, 135)',
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
      secondary: 'rgb(54, 156, 135)',
    },
  },
  typography: {
    h1: {
      color: 'rgb(54, 156, 135)',
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h3: {
      color: 'rgb(54, 156, 135)',
      fontSize: '1.7rem',
      fontWeight: 500,
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: '1.2rem',
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
      // color: 'rgb(54, 156, 135)',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiTimelineItem: {
      missingOppositeContent: {
        '&:before': {
          flex: 0.03,
        },
      },
    },
  } as any,
});

export default theme;

import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import { GitHub, Mail, Phone } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    infoIcon: {
      paddingRight: theme.spacing(1),
    },
    infoContainer: {
      display: 'flex',
      justifyContent: 'center',
      columnGap: theme.spacing(2),
      lineHeight: '0.8',
    },
    header: {
      padding: theme.spacing(1),
      boxShadow: '0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12),0 3px 5px rgba(0,0,0,.2)',
    },
    bullet: {
      fontSize: '2rem',
    },
  }),
);

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Typography variant="h1" display="block" align="center">
        Alex Schlumpf
      </Typography>
      <Box>
        <Typography variant="subtitle1" component="h2" display="block" align="center">
          Front End Engineer
        </Typography>
        <Box className={classes.infoContainer}>
          <Box display="flex" alignItems="center">
            <Mail className={classes.infoIcon} />
            <Typography variant="subtitle2">aschlumpf3412@gmail.com</Typography>
          </Box>
          <span className={classes.bullet}>•</span>
          <Box display="flex" alignItems="center">
            <Phone className={classes.infoIcon} />
            <Typography variant="subtitle2">(732)-742-2116</Typography>
          </Box>
          <span className={classes.bullet}>•</span>
          <Box display="flex" alignItems="center">
            <GitHub className={classes.infoIcon} />
            <Typography variant="subtitle2">https://github.com/aschlumpf</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

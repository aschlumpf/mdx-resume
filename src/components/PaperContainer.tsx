import React from 'react';
import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import { Mail, Phone, GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
  createStyles({
    infoIcon: {
      paddingRight: theme.spacing(1),
    },
    infoContainer: {
      display: 'flex',
      justifyContent: 'center',
      columnGap: theme.spacing(2),
    },
    header: {
      padding: theme.spacing(1),
      boxShadow: '0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12),0 3px 5px rgba(0,0,0,.2)',
    },
  }),
);

const PaperContainer: React.FC = (props) => {
  const classes = useStyles();
  return (
    <Box display="block" margin="auto" border="1px solid black" height="11in" width="8.5in" color="primary">
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
            <Box display="flex" alignItems="center">
              <Phone className={classes.infoIcon} />
              <Typography variant="subtitle2">(732)-742-2116</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <GitHub className={classes.infoIcon} />
              <Typography variant="subtitle2">https://github.com/aschlumpf</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaperContainer;

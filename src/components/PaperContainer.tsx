import React from 'react';
import {
  Box,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Header from './Header';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { FiberManualRecord, RadioButtonUnchecked } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'block',
      margin: 'auto',
      border: '1px solid black',
      height: '11in',
      width: '8.5in',
    },
    body: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    },
    timeline: {
      position: 'absolute',
      right: '20%',
      width: '100%',
    },
    timelineConnector: {
      background: '#212121',
    },
    timelineDate: {
      fontWeight: 500,
    },
    experienceDetails: {
      paddingTop: theme.spacing(1),
    },
  }),
);

const PaperContainer: React.FC = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Header />
      <Box className={classes.body}>
        <Box>
          <Typography variant="h3">Experience</Typography>
          <Timeline className={classes.timeline}>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography className={classes.timelineDate} variant="h4" color="textSecondary">
                  February 2021
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector classes={{ root: classes.timelineConnector }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h4">Software Engineer | iCIMS</Typography>
                <ul className={classes.experienceDetails}>
                  <li>
                    <Typography variant="body1">
                      Migrated a vanilla Node.js Express server to a new stack with TypeScript, ES6 modules, and Jest.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Mentoring Associated Software Engineers and interns by offering help with challenging tickets,
                      leading code reviews, and offering advice on best practices.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Aligned my team's application with the company authentication standards, reworking the application
                      login flow to support all of OIDC with Auth0, SAML, and legacy (password) methods.
                    </Typography>
                  </li>
                </ul>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography className={classes.timelineDate} variant="h4" color="textSecondary">
                  June 2020
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector classes={{ root: classes.timelineConnector }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h4">Associate Software Engineer | iCIMS</Typography>
                <ul className={classes.experienceDetails}>
                  <li>
                    <Typography variant="body1">
                      Responsible for developing features for an Angular application built with Material, completing
                      work to full definition-of-done with accessibility, unit testing, type safety, and performance, in
                      mind.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Designed and implemented an architecture for adopting localization in the application, which was
                      previously hard-coded in English.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Developed custom solutions for large customers of the application, working alongside a technical
                      project manager.
                    </Typography>
                  </li>
                </ul>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography className={classes.timelineDate} variant="h4" color="textSecondary">
                  June 2019
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h4">Software Engineer Intern | iCIMS</Typography>
                <ul className={classes.experienceDetails}>
                  <li>
                    <Typography variant="body1">
                      Wrote production code for an Angular application, including components, views, and unit test
                      cases.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Designed and implemented a SPA form builder based on a custom JSON schema for a production
                      product, written in React with Redux.
                    </Typography>
                  </li>
                </ul>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
        {/* <Box>
          <Typography variant="h3">Education</Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default PaperContainer;

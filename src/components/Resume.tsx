import React, { useRef } from 'react';
import { Box, createStyles, makeStyles, Typography, Chip } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Header from './Header';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'block',
      margin: 'auto',
      border: '1px solid black',
      height: '11.75in',
      width: '8.25in',
    },
    body: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    },
    timeline: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    timelineConnector: {
      background: '#212121',
    },
    timelineOppositeContent: {
      flex: 0.4,
    },
    timelineDate: {
      fontWeight: 500,
    },
    experienceDetails: {
      paddingTop: theme.spacing(1),
    },
    bullet: {
      fontSize: '2rem',
      padding: `0 ${theme.spacing(0.7)}px`,
    },
    education: {
      padding: `6px ${theme.spacing(2)}px`,
      marginTop: theme.spacing(1),
      '& .MuiTypography-h4, & .MuiTypography-subtitle2': {
        lineHeight: '1.2rem',
      },
    },
    skills: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: theme.spacing(1),
      padding: `6px ${theme.spacing(2)}px`,
      marginTop: theme.spacing(1),
    },
    chipContainer: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      '& h4': {
        flex: '0.2',
      },
    },
    chipRow: {
      display: 'flex',
      justifyContent: 'flex-start',
      flex: '0.8',
      columnGap: theme.spacing(1),
      '& .MuiChip-root': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
    },
  }),
);

const PaperContainer: React.FC = (props) => {
  const classes = useStyles();
  const resumeRef = useRef();
  return (
    <div id="resume" ref={resumeRef} className={classes.container}>
      <Header />
      <Box className={classes.body}>
        <Box>
          <Typography variant="h3">Experience</Typography>
          <Box display="flex" justifyContent="flex-start">
            <Timeline className={classes.timeline}>
              <TimelineItem>
                <TimelineOppositeContent className={classes.timelineOppositeContent}>
                  <Typography className={classes.timelineDate} variant="h4" color="textSecondary">
                    February 2021 - Present
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
                        Aligned my team's application with the company authentication standards, reworking the
                        application login flow to support OAuth, SAML, and legacy authentication methods.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Re-architecting core features of the application and implementing new solutions to support a
                        rapidly growing customer base.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Represent my team on customer and technical support escalations in order to ensure our team
                        meets contractual obligations.
                      </Typography>
                    </li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent className={classes.timelineOppositeContent}>
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
                        work to full definition-of-done with accessibility, unit testing, type safety, and performance,
                        in mind.
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
                    <li>
                      <Typography variant="body1">
                        Implemented a unit testing standard for the application, built on Karma with Jasmine.
                      </Typography>
                    </li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent className={classes.timelineOppositeContent}>
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
                        Worked through my final year in college as a part-time contributor to a production Angular
                        application used by over 300 customers.
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
        </Box>
        <Box marginBottom="14px">
          <Typography variant="h3">Education</Typography>
          <Box className={classes.education}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h4">Stevens Institute of Technology</Typography>
              <Typography variant="h4">Bachelor's of Science with High Honor</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle2">Hoboken, NJ</Typography>
              <Typography variant="subtitle2">Computer Science</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle2">August 2016 - May 2020</Typography>
              <Typography variant="subtitle2">3.98 GPA</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h3">Skills</Typography>
          <Box className={classes.skills}>
            <Box className={classes.chipContainer}>
              <Typography variant="h4">Languages</Typography>
              <Box className={classes.chipRow}>
                <Chip label="TypeScript" />
                <Chip label="Modern JS" />
                <Chip label="Node.js" />
                <Chip label="Java" />
              </Box>
            </Box>
            <Box className={classes.chipContainer}>
              <Typography variant="h4">Frameworks</Typography>
              <Box className={classes.chipRow}>
                <Chip label="Angular" />
                <Chip label="React.js" />
                <Chip label="Material Design" />
                <Chip label="RxJS" />

                <Chip label="Jest" />
                <Chip label="Jasmine" />
              </Box>
            </Box>
            <Box className={classes.chipContainer}>
              <Typography variant="h4">Patterns</Typography>
              <Box className={classes.chipRow}>
                <Chip label="Functional Programming" />
                <Chip label="Accessibility" />
                <Chip label="Localization" />
                <Chip label="Web Performance" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PaperContainer;

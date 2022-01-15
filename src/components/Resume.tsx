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
      // size: 'A4',
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
      fontStyle: 'italic',
      fontSize: '1rem',
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
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap',
      columnGap: theme.spacing(1),
      rowGap: theme.spacing(1),
      '& h4': {
        flex: '0.2',
      },
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
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector classes={{ root: classes.timelineConnector }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h4">Software Engineer, iCIMS</Typography>
                  <Typography variant="subtitle2" className={classes.timelineDate}>
                    Feb 2021 - Present
                  </Typography>
                  <ul className={classes.experienceDetails}>
                    <li>
                      <Typography variant="body1">
                        Serve as technical leader for a team working with an Angular2 frontend and Node.js backend.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Architected and implemented drag and drop form builder that saved implementation consultants 10+
                        hours of non-billable time per implementation.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Implemented an Auth0 integration with other products across the business to help streamline
                        cross-product authentication and win strategic business accounts.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Mentor interns and junior engineers, teaching best practices, explaining key concepts, and
                        reviewing PRs.
                      </Typography>
                    </li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector classes={{ root: classes.timelineConnector }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h4">Associate Software Engineer, iCIMS</Typography>
                  <Typography variant="subtitle2" className={classes.timelineDate}>
                    Jun 2020 - Feb 2021
                  </Typography>
                  <ul className={classes.experienceDetails}>
                    <li>
                      <Typography variant="body1">
                        Integrated I18Next framework for localizing our Angular application that was previously
                        English-only, helping to create a global sales pipeline for our product.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Worked alongside Senior Product Manager to implement custom solutions for enterprise customers
                        in order to meet $500k+ contractual obligations.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Promoted out of Associate role in a little over 6 months for exceeding performance expectations.
                      </Typography>
                    </li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h4">Software Engineer Intern, iCIMS</Typography>
                  <Typography variant="subtitle2" className={classes.timelineDate}>
                    Jun 2019 - Jun 2020
                  </Typography>
                  <ul className={classes.experienceDetails}>
                    <li>
                      <Typography variant="body1">
                        Increased unit test coverage from 0% to 40% in 6 months by architecting use of Karma and Jasmine
                        in the Angular application.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Integrated a newly acquired product with iCIMS design system standards promoting cross-selling
                        of over 5 enterprise customers.
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
              <Typography variant="h4">Bachelor's of Science: Computer Science</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle2">Hoboken, NJ</Typography>
              <Typography variant="subtitle2">3.98 GPA</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle2">May 2020</Typography>
              <Typography variant="subtitle2">Degree with High Honor</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h3">Technical Skills</Typography>
          <Box className={classes.skills}>
            <Box className={classes.chipContainer}>
              <Chip label="TypeScript" />
              <Chip label="ES2015+ JavaScript" />
              <Chip label="Angular" />
              <Chip label="ReactJS" />
              <Chip label="Node.js" />
              <Chip label="Java" />
              <Chip label="Express" />
              <Chip label="RxJS" />
              <Chip label="SASS / CSS" />
              <Chip label="Jest / Mocha" />
              <Chip label="Storybook" />
              <Chip label="Material" />
              <Chip label="WebSocket" />
              <Chip label="NextJS" />
              <Chip label="OAuth" />
              <Chip label="NoSQL" />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PaperContainer;

# Overview

This project was created so that I could build my resume in React.js with the MaterialUI framework. The application is built on Next.js with static generation and TypeScript, but it is not meant to be hosted on the Web at this time.

# Print the resume

1. Run `npm i`
2. Run `npm run build`
3. Run `npm start`
4. Navigate to `http://localhost:3000` on your browser to see the application.
5. Simply print the page on the browser in order to get a PDF/print-out of the resume. When in print mode,
   the page will trim the edges of the DOM and present an A4 sized resume. Make sure to enable graphics in order to get all
   of the resume's graphics and colors.

# Future Work

I have some ideas for how to improve this project, and possibly make it available to the community to create their own resumes in MaterialUI. Tasks are categorized into "Easy", "Medium", and "Hard," difficulties, based on their individual technical complexities, amount of unknowns associated with the task, and how tedious/time-consuming the task is.

- Componentize the resume sections. (Easy)
- Automate the export to PDF process. (Easy)
- Tokenize all strings so that they can more easily be updated, possibly with a CMS. (Medium)
- Properly components in MDX so that resumes can be created painlessly in Markdown with JSX. (Hard)
- Make a resume editor where the resume's theme, components, and structure, can be customized on a UI. (Hard)
- Allow an easy way to check how the resume parses against common/open-source resume parsers. (Hard)

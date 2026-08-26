# Agency 2 Portfolio

This project was created for the Noroff Agency 2 individual assignment.

The goal of the project was to design and build a responsive developer portfolio for a fictional client, Alex Morgan.

The portfolio is built with React and uses Sanity as a headless CMS, allowing the client to update the main content without editing the React code.

## Client

Alex Morgan is a fictional front-end developer interested in modern interfaces, gaming and digital products.

The client brief is included in the project:

`docs/client-brief-alex-morgan.pdf`

## Features

- Responsive single-page portfolio
- Hero section
- About section
- Skills section
- Projects section
- Contact section
- Content managed through Sanity CMS
- Images managed through Sanity
- Responsive desktop and mobile layouts
- GitHub Project used for planning
- Deployed with Netlify

## Technologies

- React
- Vite
- JavaScript
- CSS
- Sanity
- Git
- GitHub
- Figma
- Netlify

## CMS

Sanity is used as the headless CMS for this project.

The following content can be managed through Sanity:

- Hero content
- Profile images
- About information
- Skills
- Projects
- Project images
- Contact information
- Availability information

Changes published in Sanity are displayed on the React website.

## Project Structure

agency2-portfolio/
├── docs/
├── public/
├── src/
├── studio/
├── package.json
└── README.md

The `studio` folder contains the Sanity Studio configuration and content schemas.

## Local Development

Install the project dependencies:

npm install

Start the React development server:

npm run dev

The React application will normally run on:

http://localhost:5173

## Sanity Studio

The Sanity Studio is located inside the `studio` folder.

Move into the folder:

cd studio

Install the Studio dependencies:

npm install

Start Sanity Studio:

npm run dev

The Studio will normally run on:

http://localhost:3333

## Deployment

The frontend is deployed with Netlify.

The Netlify project is connected to the GitHub repository, so new pushes to the `main` branch can trigger a new deployment automatically.

The deployed Netlify domain has also been added to the Sanity CORS configuration so the production website can retrieve CMS content.

## Links

- Live Website: https://agency2-portfolio.netlify.app
- GitHub Repository: https://github.com/Nestorillo/agency2-portfolio
- GitHub Project: https://github.com/users/Nestorillo/projects/6
- Figma Prototype: https://www.figma.com/design/UioCuYHOFOyDF1ofItqqEZ/Agency-2-Portfolio?node-id=0-1&t=pkDgYcE35Q8FMZvu-1

## Author

Nestor Polo

Noroff Agency 2
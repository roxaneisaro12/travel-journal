# ROAM Travel Journal

A responsive travel journal website rebuilt using Tailwind CSS. This repository contains both the original plain CSS version and the redesigned Tailwind CSS version.

## Project Overview

ROAM Travel Journal is a travel blog designed to inspire people to explore destinations, discover different cultures, and plan memorable adventures.

The project was originally developed using HTML and plain CSS. For this assignment, the homepage was rebuilt using Tailwind CSS utility classes while maintaining the original website's visual identity and responsive layout.

Both versions are available in this repository so their structure and styling approaches can be compared.

## Website Versions

### 1. Original Plain CSS Version

The original website is located in the root directory.

**Technologies:**
- HTML5
- CSS3
- Responsive CSS media queries

### 2. Tailwind CSS Version

The rebuilt website is located in the `tailwind` directory.

**Technologies:**
- HTML5
- Tailwind CSS v4
- Vite
- JavaScript

The Tailwind version uses utility classes for layout, spacing, typography, colors, and responsive styling.

## Features

- Responsive travel journal homepage.
- Navigation links between website sections.
- Travel story cards with images and descriptions.
- Destination articles about Rwanda, Bali, Italy, Kyoto, and Tanzania.
- A separate travel tips article.
- Consistent typography, colors, and spacing.
- Responsive layouts for different screen sizes.
- Accessible navigation and reduced-motion support.

## Technologies and Tools

- **HTML5:** Structures the website content.
- **CSS3:** Styles the original website.
- **Tailwind CSS:** Rebuilds the homepage using utility classes.
- **JavaScript:** Generates and displays the Tailwind homepage content.
- **Vite:** Runs the development server and builds the Tailwind version.
- **Git:** Tracks changes and development progress.
- **GitHub:** Hosts the project repository.
- **GitHub Pages:** Publishes both website versions.

## Project Structure

```text
travel-journal/
│
├── index.html
├── style.css
├── article.html
├── bali.html
├── italy.html
├── kyoto.html
├── tanzania.html
├── travel-tips.html
│
├── tailwind/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── public/
│   │   ├── article.html
│   │   ├── bali.html
│   │   ├── italy.html
│   │   ├── kyoto.html
│   │   ├── tanzania.html
│   │   ├── travel-tips.html
│   │   └── style.css
│   └── src/
│       ├── main.js
│       └── style.css
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
└── README.md
```

## Getting Started

### Original Plain CSS Version

1. Clone the repository:

   ```bash
   git clone https://github.com/roxaneisaro12/travel-journal.git
   ```

2. Open the project folder in Visual Studio Code.
3. Open the root `index.html` file in a browser or use a local development server.

### Tailwind CSS Version

1. Open the project folder in Visual Studio Code.
2. Open a terminal and navigate into the Tailwind directory:

   ```bash
   cd tailwind
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal.

To create a production build, run:

```bash
npm run build
```

## Rebuilding Workflow

The original website was used as the reference for the Tailwind CSS rebuild.

The rebuilding process involved:

1. Reviewing the original HTML structure and CSS styling.
2. Setting up a Vite project and installing Tailwind CSS v4.
3. Configuring Tailwind CSS through the Vite plugin.
4. Recreating the homepage layout using Tailwind utility classes.
5. Maintaining the original colors, typography, images, and content.
6. Testing the layout and story links locally.
7. Running a production build to check that the website compiles successfully.

## Deployment

GitHub Actions automatically builds and deploys both website versions whenever changes are pushed to the `main` branch.

The deployment workflow is located at:

`.github/workflows/deploy.yml`

The workflow builds the Tailwind project and publishes the original website at the repository root and the rebuilt version inside the `tailwind` directory.

## Live Websites

- **Original Plain CSS Website:** https://roxaneisaro12.github.io/travel-journal/
- **Tailwind CSS Rebuilt Website:** https://roxaneisaro12.github.io/travel-journal/tailwind/

## GitHub Repository

https://github.com/roxaneisaro12/travel-journal
Sure, I'll update and complete the `README.md` file with the missing and corrected information:

```markdown
# Electron GitHub Project Manager

An Electron application to manage multiple GitHub projects with setup instructions, view, demo, clone, and setup functionality.

## Features

- View GitHub repositories
- Demo projects
- Clone and set up projects

## Prerequisites

- [Node.js](https://nodejs.org/) (v12.0.0 or higher)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/noahschwagele/electron-project-manager.git
   cd electron-project-manager
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

## Running the Application

To start the Electron application, run:

```sh
npm start
```

This will open the Electron app window, displaying the GitHub project manager interface.

## Project Structure

- `main.js`: Main process script for Electron.
- `preload.js`: Preload script to expose APIs to the renderer process.
- `index.html`: HTML file for the renderer process.
- `renderer.js`: Renderer process script for handling UI interactions.
- `setup-project1.sh`, `setup-project2.sh`: Example setup scripts for projects.

## Adding New Projects

To add new projects, update the `projects` array in `renderer.js` with the new project's details:

```js
const projects = [
  {
    name: 'New Project',
    repoUrl: 'https://github.com/user/new-project',
    demoUrl: 'https://new-project.demo',
    setupScript: './setup-new-project.sh',
  },
  // Add more projects here
];
```

## Example Setup Script

Create setup scripts for your projects as needed. For example, `setup-new-project.sh`:

```sh
#!/bin/bash
cd new-project
npm install
```

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Create a new Pull Request

## Issues

If you encounter any issues, please report them [here](https://github.com/noahschwagele/electron-project-manager/issues).

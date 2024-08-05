const projects = [
    {
      name: 'Base App Mobile (react Native + Expo) ',
      repoUrl: 'https://github.com/noahschwagele/base-app',
      demoUrl: 'https://github.com/noahschwagele/base-app',
      setupScript: './setup-project1.sh',
    },
    {
      name: 'Project 2',
      repoUrl: 'https://github.com/user/project2',
      demoUrl: 'https://project2.demo',
      setupScript: './setup-project2.sh',
    },
  ];
  
  const projectsDiv = document.getElementById('projects');
  
  projects.forEach((project) => {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `
      <h2>${project.name}</h2>
      <button onclick="viewRepo('${project.repoUrl}')">View Repo</button>
      <button onclick="demoProject('${project.demoUrl}')">Demo</button>
      <button onclick="cloneAndSetup('${project.repoUrl}', '${project.setupScript}')">Clone & Setup</button>
    `;
    projectsDiv.appendChild(projectDiv);
  });
  
  function viewRepo(url) {
    window.electron.openUrl(url);
  }
  
  function demoProject(url) {
    window.electron.openUrl(url);
  }
  
  function cloneAndSetup(repoUrl, setupScript) {
    window.electron.cloneRepo(repoUrl);
    window.electron.setupProject(setupScript);
  }
  
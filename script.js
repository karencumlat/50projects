import { projects } from './module.js';
const main = document.getElementById('main');
showProjects(projects);
function showProjects(projects) {
  projects.forEach((project, index) => {
    const { name } = project;
    const trim = name.toLowerCase().replace(/\s+/g, '');
    const day = index + 1;
    const link = index < 9 ? `project0${day}.${trim}` : `project${day}.${trim}`;

    const projectEl = document.createElement('div');
    projectEl.classList.add('project');

    projectEl.innerHTML = `

    <div class="card m-1" style="width: 18rem;">
  <img src="./assets/image/${day}.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Day ${day}</h5>
    <a href='${link}/index.html' class="card-link" target="_blank"><h6 class="card-subtitle">${name} Demo</h6></a>
  </div>
</div>

  `;

    main.appendChild(projectEl);
  });
}

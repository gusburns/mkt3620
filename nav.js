// navigation.js

function loadNavigation() {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <ul class="nav-list">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Me</a></li>
      <li><a href="resume.html">Resume</a></li>
      <li><a href="experience.html">Experience</a></li>
      <li><a href="personal.html">Personal</a></li>
    </ul>
  `;
  document.body.prepend(nav);
}

document.addEventListener("DOMContentLoaded", loadNavigation);

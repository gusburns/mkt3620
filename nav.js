// navigation.js

function loadNavigation() {
  const header = document.createElement("header");
  header.innerHTML = `
    <div class="top-bar">
      <div class="logo">
        <img src="logo.png" alt="Site Logo" style="height:60px;">
      </div>
      <div class="site-info">
        <p>This area is for informational graphics which describe in images what your site is about.</p>
      </div>
    </div>

    <nav class="primary-nav">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Me</a></li>
        <li><a href="resume.html">Resume</a></li>
        <li><a href="experience.html">Experience</a></li>
        <li><a href="personal.html">Personal</a></li>
      </ul>
    </nav>

    <nav class="secondary-nav">
      <ul>
        <li><a href="news.html">News</a></li>
        <li><a href="offers.html">Offers</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  `;
  document.body.prepend(header);
}

document.addEventListener("DOMContentLoaded", loadNavigation);

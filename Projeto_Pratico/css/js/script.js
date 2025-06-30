function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('show');
}

// Marcar link ativo da navbar
const pageFile = window.location.pathname.split("/").pop() || "index.html";
const pageName = pageFile.split(".")[0];
const navLinks = document.querySelectorAll("a[data-page]");

navLinks.forEach(link => {
  if (link.getAttribute("data-page") === pageName) {
    link.classList.add("active-link");
  }
});

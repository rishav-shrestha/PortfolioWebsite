document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.navbar');
    const home = document.querySelector('.home');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 100);
      home.classList.toggle('scrolled', window.scrollY > 100);
    });
  });

  function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("show");
  }
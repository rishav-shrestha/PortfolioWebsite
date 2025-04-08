document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 100);
    });
  });
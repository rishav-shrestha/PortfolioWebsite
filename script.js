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


const images = [
    'image/project.png',
    'image/project2.png',
    'image/project3.png',
    'image/project4.png'
  ];

  var currentIndex = 0;
  setInterval(cycleImages, 3000);
  
  function cycleImages() {
    const imgElement = document.getElementById('project-img');
    imgElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }

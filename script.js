
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.navbar');
    const home = document.querySelector('.home');
    const footer = document.querySelector('.footer');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 100);
      home.classList.toggle('scrolled', window.scrollY > 100);
      footer.classList.toggle('scrolled', window.scrollY > 100);
    });
    typeWriter();
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
  setInterval(cycleImages, 100);

  function cycleImages() {
    const imgElement = document.getElementById('project-img');
    imgElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }

  var i = 0;
  var txt = 'I am Rishav Shrestha';
  var speed = 100;
  
  function type() {
    if (i < txt.length) {
      document.getElementById("hometitle").innerHTML += txt.charAt(i);
      i++;
      setTimeout(type, speed);
    }
    else
    {
    setTimeout(del, 500);
    }
  }
  function del() {
    if (i >4) {
      document.getElementById("hometitle").innerHTML =document.getElementById("hometitle").innerHTML.substring(0, document.getElementById("hometitle").innerHTML.length - 1);
      i--;
      setTimeout(del, speed);
    }
    else
    {
    setTimeout(type, 500);
    }
  }

  function typeWriter() {
    i = 4;
    document.getElementById("hometitle").innerHTML= "I am";
    type();
  }
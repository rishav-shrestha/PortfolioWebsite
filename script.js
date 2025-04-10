document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.navbar');
    const navl = document.querySelector('.navlinks');
    const home = document.querySelector('.home');
    const footer = document.querySelector('.footersticky');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 100);
        navl.classList.toggle('scrolled', window.scrollY > 100);
        home.classList.toggle('scrolled', window.scrollY > 100);
        footer.classList.toggle('scrolled', window.scrollY > 100);

        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;

        footer.classList.toggle('bottom', scrollPosition + viewportHeight >= documentHeight - 100);
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

let currentIndex = 0;
setInterval(cycleImages, 3000);

function cycleImages() {
    const imgElement = document.getElementById('project-img');
    if (imgElement) {
        imgElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }
}


let i = 0;
const txt = [
    'I am Rishav Shrestha.',
    'I am a Game Developer.',
    'I am a 3d Developer.',
    'I am a Student.'
];
let txtindex = 0;
const typespeed = 200;
const delspeed = 50;

function type() {
    if (i < txt[txtindex].length) {
        document.getElementById("hometitle").innerHTML += txt[txtindex].charAt(i);
        i++;
        setTimeout(type, typespeed);
    } else {
        setTimeout(del, 2000);
    }
}

function del() {
    if (i > 4) {
        document.getElementById("hometitle").innerHTML = document.getElementById("hometitle").innerHTML.slice(0, -1);
        i--;
        setTimeout(del, delspeed);
    } else {
        txtindex = (txtindex + 1) % txt.length;
        setTimeout(type, 10);
    }
}

function typeWriter() {
    i = 4;
    document.getElementById("hometitle").innerHTML = "I am";
    type();
}

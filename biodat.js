const title = document.querySelector("#Hello h1");

function createParticle() {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    const offsetX = title.offsetLeft + (Math.random() * title.offsetWidth);
    const offsetY = title.offsetTop + (Math.random() * title.offsetHeight);

    particle.style.left = offsetX + "px";
    particle.style.top = offsetY + "px";

    document.body.appendChild(particle);

}

setInterval(createParticle, 200);


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {

            this.classList.add('nav-clicked');

            setTimeout(() => {
                this.classList.remove('nav-clicked');
            }, 150); 
            
        });
    });
});


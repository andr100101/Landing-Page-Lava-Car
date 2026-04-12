const maps = document.getElementById("maps-integration")
const landOverlay = document.getElementById("overlay");
const services = document.querySelectorAll(".service-block");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

window.addEventListener('scroll', () => {
    if(window.scrollY > 30){
        maps.classList.add('scroll');
        landOverlay.classList.add('scroll');
        services.forEach(service => {
            service.classList.add('move');
        })}else {
        maps.classList.remove('scroll');
        landOverlay.classList.remove('scroll');
        services.forEach(service =>{
            service.classList.remove('move');
        })};
    }
);





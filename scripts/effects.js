const maps = document.getElementById("maps-integration")
const landOverlay = document.getElementById("overlay");
const services = document.querySelectorAll(".service-block");
const mensageBox = document.getElementById("mensage-box");
const markTxt = document.getElementById("mark-txt");
const comparisons = document.querySelectorAll(".comparison-block");
const review = document.getElementById("review");


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

window.addEventListener('scroll', () => {
    if(window.scrollY > 800){
        maps.classList.add('scroll');
        landOverlay.classList.add('scroll');
        
        if(window.scrollY > 900){
        services.forEach(service => {
            service.classList.add('move');
        });
        if(window.scrollY > 2500){
            review.style.transform = "translateX(0%)"
            mensageBox.style.transform = "translateY(0%)";
            if(window.scrollY > 3000){
                markTxt.style.transform = "translateX(0%)";
            }else{
               markTxt.style.transform = "translateX(100%)" 
            }

        }else{
            review.style.transform = "translateX(-100%)";
            mensageBox.style.transform = "translateY(140%)";
        }}else{
            services.forEach(service =>{
            service.classList.remove('move');
        })
        }
    
    }else {
        maps.classList.remove('scroll');
        landOverlay.classList.remove('scroll');
        };
    }
);





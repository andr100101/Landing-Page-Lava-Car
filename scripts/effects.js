const maps = document.getElementById("maps-integration")
const landOverlay = document.getElementById("overlay");
const services = document.querySelectorAll(".service-block");
const mensageBox = document.getElementById("mensage-box");
const markTxt = document.getElementById("mark-txt");
const comparisons = document.querySelectorAll(".comparison-block");


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

window.addEventListener('scroll', () => {
    if(window.scrollY > 30){
        maps.classList.add('scroll');
        landOverlay.classList.add('scroll');
        
        if(window.scrollY > 370){
        services.forEach(service => {
            service.classList.add('move');
        });
        if(window.scrollY > 1600){
            mensageBox.style.transform = "translateY(0%)";
            if(window.scrollY > 1800){
                markTxt.style.transform = "translateX(0%)";
            }else{
               markTxt.style.transform = "translateX(100%)" 
            }

        }else{
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





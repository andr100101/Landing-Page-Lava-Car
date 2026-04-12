document.addEventListener("DOMContentLoaded", () => {

    const comparisons = document.querySelectorAll(".comparison-block");

    comparisons.forEach((comparison)=>{
        const slider = comparison.querySelector(".slider");
        const beforeImage = comparison.querySelector(".before-image");
        const line = comparison.querySelector(".slider-line");
        const button = comparison.querySelector(".slider-button");

        slider.addEventListener("input", (e) => {
            let sliderValue = e.target.value + "%";

            beforeImage.style.width = sliderValue;
            line.style.left = sliderValue;
            button.style.left = sliderValue;
            });
    });
    }
);
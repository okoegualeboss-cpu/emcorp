const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let counter = 0;

// Next image
nextBtn.onclick = () => {
    counter++;
    if (counter >= slider.children.length) counter = 0;
    slider.style.transform = `translateX(-${counter * 100}%)`;
};

// Previous image
prevBtn.onclick = () => {
    counter--;
    if (counter < 0) counter = slider.children.length - 1;
    slider.style.transform = `translateX(-${counter * 100}%)`;
};

// Mobile swipe support
let startX = 0;

slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (startX > endX + 50) nextBtn.click();
    if (startX < endX - 50) prevBtn.click();
});

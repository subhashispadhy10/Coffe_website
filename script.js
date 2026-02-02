const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});


 
 let index = 0;
const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".text_box");

function visibleCards() {
    if (window.innerWidth <= 576) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
}

function slideRight() {
    const visible = visibleCards();
    if (index < cards.length - visible) {
        index++;
        moveSlider();
    }
}

function slideLeft() {
    if (index > 0) {
        index--;
        moveSlider();
    }
}

function moveSlider() {
    const cardWidth = cards[0].offsetWidth + 16; // gap included
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

/* Reset on resize */
window.addEventListener("resize", () => {
    index = 0;
    slider.style.transform = "translateX(0)";
});


 
const leftBtn = document.getElementById("scroll-btn-left");
const rightBtn = document.getElementById("scroll-btn-right");

const scrollContainer = document.getElementById("images-scroll-box");


scrollContainer.addEventListener("wheel",(event)=>{
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
})
scrollContainer.style.scrollBehavior = "smooth";
const scrollAmount = scrollContainer.offsetWidth;

rightBtn.addEventListener("click", () => {
    try {
        scrollContainer.scrollLeft += scrollAmount;
        console.log("Scrolled Right:", scrollContainer.scrollLeft);
    } catch (err) {
        console.error("Error in rightBtn scroll:", err);
    }
});

leftBtn.addEventListener("click", () => {
    try {
        scrollContainer.scrollLeft -= scrollAmount;
        console.log("Scrolled Left:", scrollContainer.scrollLeft);
    } catch (err) {
        console.error("Error in leftBtn scroll:", err);
    }
});

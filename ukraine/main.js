const tooltip = document.querySelector(".tooltip");
const rnum = document.querySelector(".rnum");
const bg = document.querySelector(".info_bg");
const countries = document.querySelectorAll(".country_svg");

countries.forEach(country => {
    country.addEventListener("mousemove", function(e) {
        tooltip.innerText = this.dataset.title;
        rnum.innerText = this.dataset.text;
        bg.style.top = (e.y + 970) + "px";
        bg.style.left = (e.x + 20) + "px";
    });

country.addEventListener("mouseenter", function() {
    bg.style.display = "block";
});

country.addEventListener("mouseleave", function() {
    bg.style.display = "none";
} );

});
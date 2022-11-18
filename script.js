

//functions with declared varibale for navbar class
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");



// a functions for search-box close open
searchBox.addEventListener("click", function() {

    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
        
        
    }
    else {
        searchBox.classList.replace("bx-x", "bx-search");
        
    }
});

//functions for side bar menu with open close

let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");


menuOpenBtn.addEventListener("click", () => {

    navLinks.style.left = "0";

});

closeOpenBtn.addEventListener("click", () => {

    navLinks.style.left = "-100%";

});

//functions for side bar menu with open close
let htmlcssArrow = document.querySelector(".htmlcss-arrow");

htmlcssArrow.addEventListener("click", () => {

    navLinks.classList.toggle("show1");
    
});

let moreArrow = document.querySelector(".more-arrow");

moreArrow.addEventListener("click", () => {

    navLinks.classList.toggle("show2");

});


// function code dark and light theme 
var icon = document.getElementById("icon");

    icon.onclick = function() {

        document.body.classList.toggle("dark-theme");

        if(document.body.classList.contains("dark-theme")) {

            icon.src = "sun.png";

        }

        else {

            icon.src = "moon.png";
        }
}


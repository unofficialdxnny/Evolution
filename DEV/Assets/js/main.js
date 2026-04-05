let menuToggle = document.querySelector(".toggle");
let Navigation = document.querySelector(".navigation");
let mainContent = document.querySelector(".main-content");
menuToggle.onclick = function () {
    menuToggle.classList.toggle("active");
    Navigation.classList.toggle("active");
    if (mainContent) {
        mainContent.classList.toggle("active");
    }
};

// add active class in selected list item
let list = document.querySelectorAll(".list");
let sections = document.querySelectorAll(".section");

for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = "list";
        }
        list[i].className = "list active";

        if (sections.length > 0) {
            sections.forEach(sec => sec.classList.remove("active"));
            let target = list[i].getAttribute("data-target");
            if (target) {
                let targetSection = document.getElementById(target);
                if (targetSection) {
                    targetSection.classList.add("active");
                }
            }
        }
    };
}

// Theme Toggle Logic
let themeToggleBtn = document.getElementById("theme-toggle");
let bodyEl = document.body;
let moonIcon = document.querySelector(".moon-icon");
let sunIcon = document.querySelector(".sun-icon");
let themeTitle = document.querySelector("#theme-toggle .title");

// Check local storage for theme
let savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    bodyEl.classList.add("dark-mode");
    if (moonIcon && sunIcon && themeTitle) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline-block";
        themeTitle.innerText = "Light Mode";
    }
}

if (themeToggleBtn) {
    themeToggleBtn.onclick = function (e) {
        e.preventDefault();
        bodyEl.classList.toggle("dark-mode");
        
        let isDark = bodyEl.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        
        if (moonIcon && sunIcon && themeTitle) {
            if (isDark) {
                moonIcon.style.display = "none";
                sunIcon.style.display = "inline-block";
                themeTitle.innerText = "Light Mode";
            } else {
                moonIcon.style.display = "inline-block";
                sunIcon.style.display = "none";
                themeTitle.innerText = "Dark Mode";
            }
        }
    };
}

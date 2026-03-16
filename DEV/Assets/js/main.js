let menuToggle = document.querySelector(".toggle");
let Navigation = document.querySelector(".navigation");
let mainContent = document.querySelector(".main-content");
menuToggle.onclick = function () {
    menuToggle.classList.toggle("active");
    Navigation.classList.toggle("active");
    if(mainContent) {
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

        if(sections.length > 0) {
            sections.forEach(sec => sec.classList.remove("active"));
            let target = list[i].getAttribute("data-target");
            if(target) {
                let targetSection = document.getElementById(target);
                if(targetSection) {
                    targetSection.classList.add("active");
                }
            }
        }
    };
}

const buttClose = document.querySelector("#buttClose");
const buttOpen = document.querySelector("#buttOpen");
const leftContainer = document.querySelector(".left_container");
console.log(buttClose);
console.log(buttOpen);

// buttOpen.forEach(function (item) {
    buttOpen.addEventListener("click", () => {
        buttOpen.classList.add("active_arr");
        const activeClass = document.querySelector(".off");
        if (activeClass) {
            leftContainer.classList.remove("off");
            leftContainer.classList.add("active");
        }
    })
// })
// buttClose.forEach(function (item) {
    buttClose.addEventListener("click", () => {
        buttOpen.classList.remove("active_arr");
        const activeClass = document.querySelector(".active");
        if (activeClass) {
            leftContainer.classList.remove("active");
            leftContainer.classList.add("off");
        }
    })
// })
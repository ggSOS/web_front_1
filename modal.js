const button = document.querySelector("button");
const poupup = document.querySelector(".poupup-wraper");

const openClick = function() {
    poupup.classList.add("d-block");
}

const eventModal = function(event) {
    //console.log(event.target.classList[0]);
    const clickOfElement = event.target.classList[0];
    const clasListNameArray = ["poupup-close", "poupup-link", "poupup-wraper"];

    const isClassList = clasListNameArray.includes(clickOfElement);

    if (isClassList) {
        poupup.classList.remove("d-block");
    }
}

button.addEventListener("click", openClick);
poupup.addEventListener("click", eventModal);
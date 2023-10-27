const bot1 = document.querySelector(".bot1");
const bot2 = document.querySelector(".bot2");

const card = document.querySelector(".card");

bot1.addEventListener("click", function(){
    card.style.display = "none";
})
bot2.addEventListener("click", function(){
    card.style.display = "block";
})
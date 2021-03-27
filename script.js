
let cards = document.querySelectorAll(".card");

//Add active class that is clicked.
cards.forEach((card) => {
    card.addEventListener("click",(e) => {
        clearActives();
        e.target.classList.add("active");
    })
});


// Clear all classes that have active class.
function clearActives(){
    cards.forEach((card) => {
        if(card.classList.contains("active")){
            card.classList.remove("active");
        }
    })
}
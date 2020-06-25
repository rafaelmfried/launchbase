const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        
        modalOverlay.querySelector("img").src = `${card.querySelector("img").getAttribute("src")}`
        modalOverlay.querySelector("p.modal_recipe-title").innerHTML = `${card.querySelector("p.card_title").textContent}`
        modalOverlay.querySelector("p.modal_recipe-author").innerHTML = `${card.querySelector("p.card_author").textContent}`


        modalOverlay.classList.add('active')
        document.querySelector('.close-modal').addEventListener("click", function(){
            modalOverlay.classList.remove('active')
        })
    })
}
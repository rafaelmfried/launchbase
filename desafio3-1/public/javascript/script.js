const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener('click',function(){
        modalOverlay.classList.add('active')
        const siteId = card.getAttribute('id')
        modalOverlay.querySelector('iframe').src = `https:/www.rocketseat.com.br/${siteId}`
    })
}

document.querySelector('.close-modal').addEventListener('click',function(){
    if(modal.classList.contains('maximaze')){
        modal.classList.remove('maximaze')
    }
     modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})

document.querySelector('.maximaze-modal').addEventListener('click', function(){
    modal.classList.add('maximaze')
})

document.querySelector('.minimaze-modal').addEventListener('click', function(){
    modal.classList.remove('maximaze')
})
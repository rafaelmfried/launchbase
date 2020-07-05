const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function () {
        const siteId = card.getAttribute('id')
        window.location.href = `/courses/${siteId}`
        if (card.classList.contains('coursePage')) {
            window.location.href = `https://www.rocketseat.com.br/${siteId}`
        }
    })
}
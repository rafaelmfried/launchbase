const recipes = document.querySelectorAll('.recipe_card')

for(let i=0; i < recipes.length; i++){
    recipes[i].addEventListener("click", function () {
        window.location.href = `/receitas/${i}`
    })
}

const sections = document.querySelectorAll('.section')

for(const section of sections){
    const hide_selector = section.querySelector('.hide_content')
    
    hide_selector.innerHTML = "ESCONDER"

    hide_selector.addEventListener("click", function (){
        
        if(section.classList.contains('hide')){
            section.classList.remove('hide')
            hide_selector.innerHTML = "ESCONDER"
        }else{
            section.classList.add('hide')
            hide_selector.innerHTML = "MOSTRAR"
        }
    })   
}
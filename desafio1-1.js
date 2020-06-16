//CALCULO DO IMC
const nome = 'Rafael'
const peso = 70
const altura = 1.69

const imc = peso/(altura*altura)

if(imc >=30)
    console.log(`${nome} você está acima do peso.`)
else
    console.log(`${nome} você não está acima do peso. `)

//CALCULO DE APOSENTADORIA
const sexo = 'Masculino'
const idade = 25
const contribuicao = 0

if(sexo === 'Masculino' && contribuicao >=35 && (idade+contribuicao) >= 95){
    console.log(`${nome}, você pode se aposentar!`)
}else if(sexo === 'Feminino' && contribuicao >= 30 && (idade+contribuicao) >= 85){
    console.log(`${nome}, você pode se aposentar!`)
}else{
    console.log(`${nome}, você ainda não pode se aposentar!`)
}
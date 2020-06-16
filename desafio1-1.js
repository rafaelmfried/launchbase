//CALCULO DO IMC
const name = 'Rafael'
const weight = 70
const height = 1.69

const imc = weight/(height*height)

if(imc >=30)
    console.log(`${name} você está acima do peso.`)
else
    console.log(`${name} você não está acima do peso.`)

//CALCULO DE APOSENTADORIA
const sex = 'Masculino'
const age = 25
const contributionTime = 0

if(sex === 'Masculino' && contributionTime >=35 && (age+contributionTime) >= 95){
    console.log(`${name}, você pode se aposentar!`)
}else if(sex === 'Feminino' && contributionTime >= 30 && (age+contributionTime) >= 85){
    console.log(`${name}, você pode se aposentar!`)
}else{
    console.log(`${name}, você ainda não pode se aposentar!`)
}
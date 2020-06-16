//Usuarios e Tecnologias
const usuarios = [
    {nome: 'Rafael', tecnologias: ['C','Python','JavaScript']},
    {nome:'Carlos', tecnologias: ['HTML', 'CSS']},
    {nome: 'Jasmine', tecnologias: ['JavaScript','CSS', 'HTML']}
]

function messager (usuarios){
    for(let i = 0; i < usuarios.length; i++){
        let message = `${usuarios[i].nome} trabalha com `

        for(let j = 0; j < usuarios[i].tecnologias.length; j++){
          message =  message + `${usuarios[i].tecnologias[j]}`
            if(j+1 < usuarios[i].tecnologias.length)
                message = message + ', '
            else
                message = message + '.'
        }
        console.log(message)
    }
}

messager(usuarios)

//Busca por tecnologia
function checaSeUsuarioUsaCSS (usuario) {
    for(let i = 0; i < usuario.tecnologias.length; i++){
        if(usuario.tecnologias[i] === 'CSS')
            return true
    }
    return false
}

for(let i = 0; i < usuarios.length; i++){
    if(checaSeUsuarioUsaCSS(usuarios[i]))
        console.log(`O usuario ${usuarios[i].nome} trabalha com CSS`)
}

//Soma de despesas e receitas
const users = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

function somaNumeros(numeros) {
    let soma = 0
    for(let i = 0; i < numeros.length; i++)
        soma = soma + numeros[i]
    
    return soma
}

function calculaSaldo (receitas, despesas) {
    return somaNumeros(receitas) - somaNumeros(despesas)
}

for(let i = 0; i < users.length; i++){
    let flag = "ZERADO"
    let saldo = calculaSaldo(users[i].receitas, users[i].despesas)
    if(saldo >= 0)
        flag = "POSITIVO"
    else
        flag = "NEGATIVO"
    
    console.log(`${users[i].nome} possui saldo ${flag} de ${saldo.toFixed(2)}.`)
}
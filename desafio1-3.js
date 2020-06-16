//users e Tecnologias
const users = [
    {name: 'Rafael', tecnologies: ['C','Python','JavaScript']},
    {name:'Carlos', tecnologies: ['HTML', 'CSS']},
    {name: 'Jasmine', tecnologies: ['JavaScript','CSS', 'HTML']}
]

function messager (users){
    
    for(let i = 0; i < users.length; i++){
        let message = `${users[i].name} trabalha com `

        for(let j = 0; j < users[i].tecnologies.length; j++){
          message =  message + `${users[i].tecnologies[j]}`
            
            if(j+1 < users[i].tecnologies.length)
                message = message + ', '
            else
                message = message + '.'
        }

        console.log(message)
    }
}

messager(users)

//Search for tecnologies
function checkCssUsers (user) {
    
    for(let i = 0; i < user.tecnologies.length; i++){
        
        if(user.tecnologies[i] === 'CSS')
            return true
    }

    return false
}

for(let i = 0; i < users.length; i++){
    
    if(checkCssUsers(users[i]))
        console.log(`O usuario ${users[i].name} trabalha com CSS`)
}

//sum of expenses and income
const usersCashBook = [
    {
        name: "Salvio",
        income: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        income: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        income: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]

function addnumbers(numbers) {
    let sum = 0
    
    for(let i = 0; i < numbers.length; i++)
        sum = sum + numbers[i]
    
    return sum
}

function balance (income, expenses) {
    return addnumbers(income) - addnumbers(expenses)
}

for(let i = 0; i < usersCashBook.length; i++){
    let flag = "ZERADO"
    let saldo = balance(usersCashBook[i].income, usersCashBook[i].expenses)
    
    if(saldo >= 0)
        flag = "POSITIVO"
    else
        flag = "NEGATIVO"
    
    console.log(`${usersCashBook[i].name} possui saldo ${flag} de ${saldo.toFixed(2)}.`)
}
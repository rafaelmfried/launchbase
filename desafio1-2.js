//Construção e impressão de objetos

const company = {
    name: 'RocketSeat',
    color: 'roxo',
    focus: 'programacao',
    address : {
        street: 'street Guilherme Gembala',
        number: 260
    }
}

console.log(`A empresa ${company.name} está localizada em ${company.address .street}, ${company.address .number}`)

//Vetores e Objetos

const programmer = {
    name: 'Rafael',
    age: 25,
    tecnologies: [
        {
            name: 'C',
            specialty: 'Desktop'
        },
        {
            name: 'Python',
            specialty: 'Desktop'
        },
        {
            name: 'JavaScript',
            specialty: 'Web/Mobile'
        }
    ]
}

console.log(`O usuário ${programmer.name} tem ${programmer.age} anos e usa a tecnologia ${programmer.tecnologies[0].name} com especialidade em ${programmer.tecnologies[0].specialty}`)
//Construção e impressão de objetos

const empresa = {
    nome: 'RocketSeat',
    cor: 'roxo',
    foco: 'programacao',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

//Vetores e Objetos

const programadorA = {
    nome: 'Rafael',
    idade: 25,
    tecnologias: [
        {
            nome: 'C',
            especialidade: 'Desktop'
        },
        {
            nome: 'Python',
            especialidade: 'Desktop'
        },
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
    ]
}

console.log(`O usuário ${programadorA.nome} tem ${programadorA.idade} anos e usa a tecnologia ${programadorA.tecnologias[0].nome} com especialidade em ${programadorA.tecnologias[0].especialidade}`)
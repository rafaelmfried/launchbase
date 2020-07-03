const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", 'njk')

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get('/', function (req, res) {
    const data = [
        {
            id: "starter",
            number: "01",
            img_url: "/assets/starter.svg",
            descriptionHighlight: "Torne-se um programador desejado",
            description: " no mercado com esses cursos<br>gratuitos",
            price: "Gratuito",
            modules: "10 modulos"
        },
        {
            id: "launchbase",
            number: "02",
            img_url: "/assets/launchbase.svg",
            descriptionHighlight: "Domine programação do zero",
            description: " e tenha acesso ás melhores oportunidades do mercado",
            price: "Pago",
            modules: "16 modulos"
        },
        {
            id: "gostack",
            number: "03",
            img_url: "/assets/gostack.svg",
            descriptionHighlight: "Treinamento imersivo",
            description: " nas tecnologias mais modernas de desenvolvimento web e mobile",
            price: "Pago",
            modules: "20 modulos"
        }]

    return res.render('courses', {courses: data})
})

server.get('/about', function (req, res) {
    const data = {
                    img_url: "https://avatars1.githubusercontent.com/u/28929274?s=280&v=4",
                    name: "RocketSeat",
                    description: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
                    tecnologiesTitle: "Nossas tecnologias:",
                    tecnologiesList: ["Javascript", "HTML", "CSS", "React Native", "(...)"]
                }

    return res.render('about', {about: data})
})

server.use(function (req, res) {
    res.status(404).render("not-found")
})

server.listen(5000, function () {
    console.log('Server running...')
})
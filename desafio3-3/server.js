const express = require('express')
const nunjucks = require('nunjucks')

const coursesData = require('./data')

const server = express()

server.use(express.static('public'))

server.set("view engine", 'njk')

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function (req, res) {

    return res.render('courses', {courses: coursesData})

})

server.get('/courses/:id', function (req, res) {
    const id = req.params.id;
    const course = coursesData.find(function(course) {
        return course.id == id
    })

    if(!course){
        return res.render("not-found")
    }else{
        res.render("course", {course})
    }
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
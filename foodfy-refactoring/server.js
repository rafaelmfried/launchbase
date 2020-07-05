const express = require('express')
const nunjucks = require('nunjucks')

const recipes = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    return res.render('index', {recipes})
})

server.get("/sobre", function (req, res) {
    return res.render('about')
})

server.get("/receitas", function (req, res) {
    return res.render('recipes', {recipes})
})

server.get("/receitas/:index", function (req, res) {
    const recipeIndex = req.params.index 
    return res.render('recipe', {recipe: recipes[recipeIndex]})
})

server.listen(5000, function () {
    console.log('Serving running at port 5000...')
})
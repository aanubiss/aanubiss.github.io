const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'MARVEL'
    })
})

app.get('/dc', (req, res) => {
    res.render('dc', {
        title: 'DC'
    })
})

// MARVEL

app.get('/heroesMar', (req, res) => {
    res.render('heroes',{
        title: 'HEROES',
        itsMarvel: true
    })
})

app.get('/villainsMar', (req, res) => {
    res.render('villains', {
        title: 'VILLAINS',
        itsMarvel: true
    })
})

app.get('/chronologyMar', (req, res) => {
    res.render('chronology', {
        title: 'CHRONOLOGY',
        itsMarvel: true
    })
})

app.get('/newsMar', (req, res) => {
    res.render('news', {
        title: 'NEWS',
        itsMarvel: true
    })
})

// DC

app.get('/heroesDC', (req, res) => {
    res.render('heroes',{
        title: 'HEROES',
        itsMarvel: false
    })
})

app.get('/villainsDC', (req, res) => {
    res.render('villains', {
        title: 'VILLAINS',
        itsMarvel: false
    })
})

app.get('/chronologyDC', (req, res) => {
    res.render('chronology', {
        title: 'CHRONOLOGY',
        itsMarvel: false
    })
})

app.get('/newsDC', (req, res) => {
    res.render('news', {
        title: 'NEWS',
        itsMarvel: false
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
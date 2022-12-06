if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const mysql = require("mysql2")
const methodOverride = require('method-override')
// const bodyParser = require('body-parser')
// const encoder = bodyParser.urlencoded()
const app = express()
const bcrypt = require('bcrypt')
const flash = require('express-flash')
const session = require('express-session')
const initializePassport = require('./passport-config')

const passport = require('passport')
initializePassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user=> user.id === id)
    )
    


const users = []

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "scrapy123=",
//     database: "diettrackeruser"
// })

// connection.connect(function(error){
//     if (error) throw error
//     else console.log("connected to database successfully")
// })


app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false, 

}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', checkAuth, (req,res)=>{
    res.render('index.ejs', {name: req.user.name})
})

app.get('/login', checkNotAuth, (req, res)=>{
    res.render('login.ejs')
})

app.get('/register', checkNotAuth, (req, res)=>{
    res.render('register.ejs')
})

// app.post('/login', (req, res)=>{
//     // connection.query("select * from user where email = ? and password = ?", function(error, results, fields){
//     //     if (results.length > 0){
//     //         res.redirect('/welcome.ejs')
//     //     }
//     //     else {
//     //         res.redirect('/register.ejs') // or use render
//     //     }
//     //     res.end()
//     // })
// })

app.post('/login', checkNotAuth , passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.delete('/logout', (req, res)=>{
    req.logOut((err)=>{
        if (err){
            return next(err)
        }
        res.redirect('/login')
    })
})

app.post('/register', checkNotAuth, async (req,res)=>{
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
})

function checkAuth(req, res, next){
    if (req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}

function checkNotAuth(req, res, next){
    if (req.isAuthenticated()){
        return res.redirect('/')
    }
    next()
}

app.listen(3000)


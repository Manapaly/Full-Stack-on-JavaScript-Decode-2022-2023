const express = require('express')
const path = require('path')
const app = express()

app.set("view engine", "ejs")

let count = 0
app.use(express.json())
app.use('/public', express.static('public'))
let link = '';
// app.use((req, res, next) => {
//     if(!req.headers["content-type"] || !req.headers["content-type"].match(/json/)) {
//         return next()
//     }
//         // console.log('work')
//     let data = ""
//     try{
//         req.on("data", chunk => {
//             data += chunk
//         })
//         req.on("end", () => {
//             req.body = data ? JSON.parse(data) : 1
//             next()
//         })
//     }catch (e){
//         console.log(e)
//     }
// })

app.get('/products', (req, res) => {
    // link = req.url
    // link = link.slice(1,)
    link = 'products'
    res.render("products", {link})
})

app.get('/newProduct', (req, res) => {
    // link = req.url
    // link = link.slice(1,)
    link = 'new product'
    res.render("newProduct", {link})
})
app.get('/editProduct', (req, res) => {
    // link = req.url
    // link = link.slice(1,)
    link = 'edit product'
    res.render("editProduct", {link})
})
app.get('/productDetail', (req, res) => {
    // link = req.url
    // link = link.slice(1,)
    link = 'products > Modern Cheir'
    res.render("productDetail", {link})
})
app.get('/', (req, res) => {
    link = 'products'
    res.render("products", {link})
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
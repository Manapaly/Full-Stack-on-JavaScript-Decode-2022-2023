const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const axios = require('axios')

app.set("view engine", "ejs")

mongoose.connect('mongodb://127.0.0.1:27017/warehouse').then(() => {
    console.log("Connected to mongoDB")
}).catch((e => {
    console.log("Failed to connect")
}))

let count = 0
app.use(express.urlencoded())
app.use('/public', express.static('public'))

const warehouseSchema = new mongoose.Schema({
    title: String,
    price: Number,
    sale: Number,
    urlOfImage: String,
})

const warehouse = mongoose.model("warehouse", warehouseSchema)

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

app.post('/newProduct', async (req, res) => {
    if(req.body.title.length != 0){
        await new warehouse({
            title: req.body.title,
            price: req.body.price,
            sale: req.body.sale,
            urlOfImage: req.body.urlOfImage,
        }).save()
        res.redirect('/')
    }else{
        res.redirect('/newProduct?error=1')
    }
})

app.post('/editProduct', async (req, res) => {
    console.log(req.body)
    await warehouse.updateOne(
        {_id: req.body.id},
        {
            title: req.body.title,
            price: req.body.price,
            sale: req.body.sale,
            urlOfImage: req.body.urlOfImage
        }
    )
    res.redirect('/')
})

app.get('/delete/:id', async (req, res) => {
    await warehouse.deleteOne(
        {_id: req.params.id}
    )
    res.status(200).redirect('/')
    // axios.delete(`/delete/${req.params.id}`).then(res => res.redirect('/'))
    // res.redirect('/')/
})

app.get('/products', (req, res) => {
    link = 'products'
    res.render("products", {link})
})

app.get('/newProduct', (req, res) => {
    link = 'new product'
    res.render("newProduct", {link})
})


app.get('/editProduct/:id', async (req, res) => {
    // console.log(req.params.id)
    link = 'edit product'
    const warehouseData = await warehouse.findById(req.params.id)
    res.render("editProduct", {data: warehouseData, link})
})


app.get('/productDetail/:id', async (req, res) => {
    const warehouseData = await warehouse.findById(req.params.id)
    link = 'products > ' + warehouseData.title
    res.render("productDetail", {link, data: warehouseData})
})
app.get('/', async (req, res) => {
    const data = await warehouse.find()
    link = 'products'
    res.render("products", {link , data})
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
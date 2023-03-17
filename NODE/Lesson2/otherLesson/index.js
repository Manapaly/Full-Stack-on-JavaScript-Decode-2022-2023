const http = require('http')

const visits = new Map();

const server = http.createServer((req, res) => {
    const count = (visits.get(req.url) || 0) + 1
    visits.set(req.url, count)
    // console.log(req.url)
    res.end(`Sites opened : ${count}`)
})
const PORT = 8000
server.listen(PORT, () => {
    console.log(`Server works in port ${PORT} port`)
})
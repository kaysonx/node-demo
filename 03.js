var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('hello, express!')
})


app.get('/info', (req, res) => {
    res.send('express router info!')
})

app.listen(3000)

console.log('server is starting on localhost:3000');
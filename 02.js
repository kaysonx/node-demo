const http = require('http')

let server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'text/plain'
    })
    
    //clg
    res.on('finish',() => {
        console.log('response end!')
    })

    res.end('hello\n')
})

server.on('connection', (socket) => {
    console.log('sb connecting...')
})

server.listen(3000)

// curl -i localhost:3000
// Ctrl + Tab toggle editor
console.log('server starting on port localhost:3000...')
const sayHello = require('./lib/hello')
const fs = require('fs')

fs.writeFile('./test.md', sayHello(), (err, result) => {
    console.log('write done!')
})

fs.readFile('./test.md', (err, result) => {
    if (err) {
        return console.log(err)
    }
    console.log(result.toString())
})


console.log('io emit!')
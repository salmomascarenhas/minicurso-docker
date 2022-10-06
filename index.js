const app = require('express')


const server = app()

server.listen('/', (req,res) => {
    res.status(200).send({message: 'Hello World!'})
})


server.listen(3000,() => console.log('Its running!'))
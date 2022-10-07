const app = require('express')

const PORT = 3000
const server = app()

server.get('/', (req,res) => {
    res.status(200).send({message: 'Hello World!'})
})


server.listen(PORT,() => console.log('Its running!'))
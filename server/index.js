const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const userController = require('./controller')
const {
    getHouses,
    deleteHouse,
    createHouse,
    updateHouse,
} = userController

app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)

app.listen(4004, () => console.log("running on port 4004"))
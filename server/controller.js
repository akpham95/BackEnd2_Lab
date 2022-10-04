const houses = require('./db.json')
let globalId = 4


module.exports = {
        getHouses: (req, res) => {
            res.status(200).send(houses)
    },  
    
        deleteHouse: (req, res) => {
            // findIndex() array method returns the first index where the predicate is true, (element id is equal to req.params.id)
           let index = houses.findIndex(houseObj => houseObj.id === parseInt(req.params.id))
           houses.splice(index ,1)
           res.status(200).send(houses) // sends the updated houses, after deleting
    },

        createHouse: (req, res) => {
            let newHouse = { // create newHouse object updating variables to req.body properties
                id: globalId,
                address: req.body.address,
                price: req.body.price,
                imageURL: req.body.imageURL
            }
            houses.push(newHouse)
            res.status(200).send(houses)
            globalId++ //increment globalId for the next house
    },
    
        updateHouse: (req, res) => {
            let { id } = req.params
            let { type } = req.body
            let index = houses.findIndex(houseObj => +houseObj.id === +id)

            if (houses[index].price <= 10000 && type === 'minus') {
                houses[index].price = 0
                res.status(200).send(houses)
            }
            else if (type === 'minus') {
                houses[index].price -= 10000
                res.status(200).send(houses)
            }
            else if (type === 'plus') {
                houses[index].price += 10000
                res.status(200).send(houses)
            }else {
                res.status(400)
            }
}

}
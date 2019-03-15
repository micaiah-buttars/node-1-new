const products = require('../products.json')

module.exports = {
    getProducts: (req, res) => {
        
        if(req.query.price){
            const items = products.filter(item => item.price >= req.query.price)
            return res.status(200).send(items);
        }
        res.status(200).send(products)
    
    },


    getProduct: (req, res) => {
        const {id} = req.params
        const product = products.filter((item) =>
        item.id === id * 1)

        if(product[0]){
            res.status(200).send(product)
        } else{
            res.status(500).send('Item not in list')
        }
    },



}
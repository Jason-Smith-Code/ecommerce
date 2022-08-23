const express = require('express');
// import products
const products = require('./data/Products')


// initialize express
const app = express();

// declare port
const port = 5000; 

app.listen(port, console.log(`server running on ${port}`))

// if we get a response then
app.get('/', (request, response) => {
    // send response to front end
    response.send('API is running')
})

// get products
app.get('/api/products', (request, response) => {
    // convert the products to json
    response.json(products)
})

// get single product
app.get('/api/products/:id', (request, response) => {
    // get the product by its id
    const product = products.find(p => p._id === request.params.id)
    // conver the products to json
    response.json(product)
})
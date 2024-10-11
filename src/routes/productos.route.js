const { Router } = require('express')
const productosController = require('../controllers/productos.controller')

const route = Router()

route.get('/productos', productosController.getAllProductos)

route.get('/productos/:id', productosController.getProductoById)

route.post('/productos', productosController.createProducto)

route.delete('/productos/:id', productosController.deleteProductoById)

route.put('/productos/:id', productosController.updateProductoById)

module.exports = route
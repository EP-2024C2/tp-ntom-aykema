const { Router } = require('express')
const productosController = require('../controllers/productos.controller')
const middlewares = require('../middlewares')
const schemas = require('../schemas')

const route = Router()

route.get('/productos', productosController.getAllProductos)

route.get('/productos/:id', productosController.getProductoById)

route.post('/productos', middlewares.schemaValidator(schemas.productosSchema), productosController.createProducto)

route.delete('/productos/:id', productosController.deleteProductoById)

route.put('/productos/:id', middlewares.schemaValidator(schemas.productosSchema), productosController.updateProductoById)

route.get('/productos/:id/componentes', productosController.getProductoYSusComponentes)

route.get('/productos/:id/fabricantes', productosController.getProductoYSusFabricantes)

route.post('/productos/:id/componentes', middlewares.schemaValidator(schemas.componentesSchema), productosController.addComponenteToProducto)

route.post('/productos/:id/fabricantes', middlewares.schemaValidator(schemas.fabricantesSchema), productosController.addFabricanteToProducto)


module.exports = route
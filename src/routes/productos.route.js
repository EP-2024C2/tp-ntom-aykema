const { Router } = require('express')
const productosController = require('../controllers/productos.controller')
const middlewares = require('../middlewares')
const schemas = require('../schemas')
const { Producto, Fabricante, Componente } = require('../models')

const route = Router()

route.get('/productos', productosController.getAllProductos)

route.get('/productos/:id', middlewares.genericMiddleware.validateId(Producto), productosController.getProductoById)

route.post('/productos', middlewares.schemaValidator(schemas.productosSchema), productosController.createProducto)

route.delete('/productos/:id', middlewares.genericMiddleware.validateId(Producto), middlewares.genericMiddleware.validateAssociationsById(Producto, Fabricante), middlewares.genericMiddleware.validateAssociationsById(Producto, Componente), productosController.deleteProductoById)

route.put('/productos/:id', middlewares.schemaValidator(schemas.productosSchema), middlewares.genericMiddleware.validateId(Producto), productosController.updateProductoById)

route.get('/productos/:id/componentes', middlewares.genericMiddleware.validateId(Producto), productosController.getProductoYSusComponentes)

route.get('/productos/:id/fabricantes', middlewares.genericMiddleware.validateId(Producto), productosController.getProductoYSusFabricantes)

route.post('/productos/:id/componentes', middlewares.genericMiddleware.validateId(Producto), middlewares.schemaValidator(schemas.componentesSchema), productosController.addComponenteToProducto)

route.post('/productos/:id/fabricantes', middlewares.genericMiddleware.validateId(Producto), middlewares.schemaValidator(schemas.fabricantesSchema), productosController.addFabricanteToProducto)


module.exports = route
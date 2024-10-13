const { Router } = require('express')
const fabricantesController = require('../controllers/fabricantes.controller')
const middlewares = require('../middlewares')
const { fabricantesSchema } = require('../schemas')

const route = Router()

route.get('/fabricantes', fabricantesController.getAllFabricantes)

route.get('/fabricantes/:id', fabricantesController.getFabricanteById)

route.post('/fabricantes', middlewares.schemaValidator(fabricantesSchema), fabricantesController.createFabricante)

route.delete('/fabricantes/:id', fabricantesController.deleteFabricanteById)

route.put('/fabricantes/:id', middlewares.schemaValidator(fabricantesSchema), fabricantesController.updateFabricanteById)

route.get('/fabricantes/:id/productos', fabricantesController.getFabricanteYSusProductos)

module.exports = route
const { Router } = require('express')
const componentesController = require('../controllers/componentes.controller')
const middlewares = require('../middlewares')
const { componentesSchema } = require('../schemas')
const { Componente } = require('../models')

const route = Router()

route.get('/componentes', componentesController.getAllComponentes)

route.get('/componentes/:id', middlewares.genericMiddleware.validateId(Componente), componentesController.getComponenteById)

route.post('/componentes', middlewares.schemaValidator(componentesSchema), componentesController.createComponente)

route.delete('/componentes/:id', middlewares.genericMiddleware.validateId(Componente), componentesController.deleteComponenteById)

route.put('/componentes/:id', middlewares.schemaValidator(componentesSchema), middlewares.genericMiddleware.validateId(Componente), componentesController.updateComponenteById)

route.get('/componentes/:id/productos', middlewares.genericMiddleware.validateId(Componente), componentesController.getComponenteYSusProductos)

module.exports = route
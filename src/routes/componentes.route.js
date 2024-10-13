const { Router } = require('express')
const componentesController = require('../controllers/componentes.controller')
const middlewares = require('../middlewares')
const { componentesSchema } = require('../schemas')

const route = Router()

route.get('/componentes', componentesController.getAllComponentes)

route.get('/componentes/:id', componentesController.getComponenteById)

route.post('/componentes', middlewares.schemaValidator(componentesSchema), componentesController.createComponente)

route.delete('/componentes/:id', componentesController.deleteComponenteById)

route.put('/componentes/:id', middlewares.schemaValidator(componentesSchema), componentesController.updateComponenteById)

route.get('/componentes/:id/productos', componentesController.getComponenteYSusProductos)

module.exports = route
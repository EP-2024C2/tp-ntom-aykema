const { Router } = require('express')
const componentesController = require('../controllers/componentes.controller')

const route = Router()

route.get('/componentes', componentesController.getAllComponentes)

route.get('/componentes/:id', componentesController.getComponenteById)

route.post('/componentes', componentesController.createComponente)

route.delete('/componentes/:id', componentesController.deleteComponenteById)

route.put('/componentes/:id', componentesController.updateComponenteById)

route.get('/componentes/:id/productos', componentesController.getComponenteYSusProductos)

module.exports = route
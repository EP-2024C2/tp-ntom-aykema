const middleware = {}

const requestTime = (req, _ , next) => {
    console.log({ url: req.url, method: req.method , fechaHora: new Date() })
    next()
}

const validateId = (Model) => {
    return async (req, res, next) => {
      const id = req.params.id
      const instance = await Model.findByPk(id)
  
      if (!instance) {
        return res.status(404).json({ mensaje: `${Model.name} con id ${id} no encontrado` })
      }
  
      next()
    }
}

module.exports = { requestTime, validateId}
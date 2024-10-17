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

const validateAssociationsById = (Model, throughModel) => {
  return async (req, res, next) => {
    const id = req.params.id;

    const instance = await Model.findOne({
      where: { id },
      include: {
        model: throughModel
      }
    })

    const modelName = throughModel.name + 's'
    
    const associations = instance[modelName]  
    if (associations.length > 0) {
      return res.status(500).json({ mensaje: `No se puede eliminar el ${Model.name} porque tiene registros asociados en ${throughModel.name}.` });
    }

    next();
  };
};

module.exports = { requestTime, validateId, validateAssociationsById}
const { Componente, Producto } = require('../models')

const getAllComponentes = async (req, res) => {
    const componentes = await Componente.findAll({})
    res.status(200).json(componentes)
}

const getComponenteById = async (req, res) => {
    const id = req.params.id
    const componente = await Componente.findOne({
        where : { id }
    })
    res.status(200).json(componente)
}

const deleteComponenteById = async (req, res) => {
    const id = req.params.id
    const row = await Componente.destroy({
        where : { id }
    })
    res.status(200).json({mensaje: `Filas afectadas: ${row}`})
}

const createComponente = async (req, res) => {
    const {nombre, descripcion} = req.body
    const componente = await Componente.create({
        nombre, 
        descripcion
    })
    res.status(201).json(componente)
}

const updateComponenteById = async (req, res) => {
    const id = req.params.id
    const {nombre, descripcion} = req.body

    const componente = await Componente.findByPk(id)
    componente.nombre = nombre
    componente.descripcion = descripcion
    await componente.save()

    res.status(200).json(componente)
}

const getComponenteYSusProductos = async (req, res) => {
    const idComponente = req.params.id
    const componente = await Componente.findOne({
        where : { id : idComponente },
        include : {
            model: Producto
        }
    })
    res.status(200).json(componente)
}

module.exports = {getAllComponentes, getComponenteById, deleteComponenteById, createComponente, updateComponenteById, getComponenteYSusProductos}



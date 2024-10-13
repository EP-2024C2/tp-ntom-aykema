const { Fabricante, Producto } = require('../models')

const getAllFabricantes = async (req, res) => {
    const fabricantes = await Fabricante.findAll({})
    res.status(200).json(fabricantes)
}

const getFabricanteById = async (req, res) => {
    const id = req.params.id
    const fabricante = await Fabricante.findOne({
        where : { id }
    })
    res.status(200).json(fabricante)
}

const deleteFabricanteById = async (req, res) => {
    const id = req.params.id
    const row = await Fabricante.destroy({
        where : { id }
    })
    res.status(200).json({mensaje: `Filas afectadas: ${row}`})
}

const createFabricante = async (req, res) => {
    const {nombre, direccion, numeroContacto, pathImgPerfil} = req.body
    const fabricante = await Fabricante.create({
        nombre, 
        direccion, 
        numeroContacto, 
        pathImgPerfil
    })
    res.status(201).json(fabricante)
}

const updateFabricanteById = async (req, res) => {
    const id = req.params.id
    const {nombre, direccion, numeroContacto, pathImgPerfil} = req.body

    const fabricante = await Fabricante.findByPk(id)
    fabricante.nombre = nombre
    fabricante.direccion = direccion
    fabricante.numeroContacto = numeroContacto
    fabricante.pathImgPerfil = pathImgPerfil
    await fabricante.save()

    res.status(200).json(fabricante)
}

const getFabricanteYSusProductos = async (req, res) => {
    const idFabricante = req.params.id
    const fabricante = await Fabricante.findOne({
        where : { id : idFabricante },
        include : {
            model: Producto
        }
    })
    res.status(200).json(fabricante)
}

module.exports = {getAllFabricantes, getFabricanteById, deleteFabricanteById, createFabricante, updateFabricanteById, getFabricanteYSusProductos}



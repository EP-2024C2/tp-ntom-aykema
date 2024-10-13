const { Producto, Componente, Fabricante } = require('../models')

const getAllProductos = async (req, res) => {
    const productos = await Producto.findAll({})
    res.status(200).json(productos)
}

const getProductoById = async (req, res) => {
    const id = req.params.id
    const producto = await Producto.findOne({
        where : { id }
    })
    res.status(200).json(producto)
}

const deleteProductoById = async (req, res) => {
    const id = req.params.id
    const row = await Producto.destroy({
        where : { id }
    })
    res.status(200).json({mensaje: `Filas afectadas: ${row}`})
}

const createProducto = async (req, res) => {
    const {nombre, descripcion, precio, pathImg} = req.body
    const producto = await Producto.create({
        nombre, 
        descripcion, 
        precio, 
        pathImg
    })
    res.status(201).json(producto)
}

const updateProductoById = async (req, res) => {
    const id = req.params.id
    const {nombre, descripcion, precio, pathImg} = req.body

    const producto = await Producto.findByPk(id)
    producto.nombre = nombre
    producto.descripcion = descripcion
    producto.precio = precio
    producto.pathImg = pathImg
    await producto.save()

    res.status(200).json(producto)
}

const getProductoYSusComponentes = async (req, res) => {
    const idProducto = req.params.id
    const producto = await Producto.findOne({
        where : { id : idProducto },
        include : {
            model: Componente
        }
    })
    res.status(200).json(producto)
}

const getProductoYSusFabricantes = async (req, res) => {
    const idProducto = req.params.id
    const producto = await Producto.findOne({
        where : { id : idProducto },
        include : {
            model: Fabricante
        }
    })
    res.status(200).json(producto)
}

const addComponenteToProducto = async (req, res) => {
    const idProducto = req.params.id
    const producto = await Producto.findByPk(idProducto)
    const {nombre, descripcion} = req.body
    const componente = await Componente.create({nombre, descripcion})
    await producto.addComponente(componente)
    res.status(201).json({ mensaje : 'Componente agregado al producto'})
}

const addFabricanteToProducto = async (req, res) => {
    const idProducto = req.params.id
    const producto = await Producto.findByPk(idProducto)
    const {nombre,direccion, numeroContacto, pathImgPerfil} = req.body
    const fabricante = await Fabricante.create({nombre,direccion, numeroContacto, pathImgPerfil})
    await producto.addFabricante(fabricante)
    res.status(201).json({ mensaje : 'Fabricante agregado al producto'})
}

module.exports = {getAllProductos, getProductoById, deleteProductoById, createProducto, updateProductoById, getProductoYSusComponentes, getProductoYSusFabricantes, addComponenteToProducto, addFabricanteToProducto}
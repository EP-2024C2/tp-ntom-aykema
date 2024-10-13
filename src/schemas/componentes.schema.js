const Joi = require('joi')

const componentesSchema = Joi.object().keys(
    {
        nombre: Joi.string().required().min(3).max(255).messages({
            "any.required":"nombre es requerido",
            "string.min":"nombre debe tener como minimo {#limit} caracteres",
            "string.max":"nombre debe tener como maxino {#limit} caracteres",
            "string.empty":"nombre no puede ser vacio"
        }),
        descripcion: Joi.string().required().min(3).max(255).messages({
            "any.required":"descripcion es requerido",
            "string.min":"descripcion debe tener como minimo {#limit} caracteres",
            "string.max":"descripcion debe tener como maxino {#limit} caracteres",
            "string.empty":"descripcion no puede ser vacio"
        }) 
    }
).unknown(false).messages ({
    'object.unknown': 'El atributo {#label} no está permitido.'
})

module.exports = componentesSchema
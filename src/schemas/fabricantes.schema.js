const Joi = require('joi')

const fabricantesSchema = Joi.object().keys(
    {
        nombre: Joi.string().required().min(3).max(255).messages({
            "any.required":"nombre es requerido",
            "string.min":"nombre debe tener como minimo {#limit} caracteres",
            "string.max":"nombre debe tener como maxino {#limit} caracteres",
            "string.empty":"nombre no puede ser vacio"
        }),
        direccion: Joi.string().required().min(3).max(255).messages({
            "any.required":"direccion es requerido",
            "string.min":"direccion debe tener como minimo {#limit} caracteres",
            "string.max":"direccion debe tener como maxino {#limit} caracteres",
            "string.empty":"direccion no puede ser vacio"
        }),
        numeroContacto: Joi.string().required().min(8).max(11).messages({
            "any.required":"numeroContacto es requerido",
            "string.min":"numeroContacto debe tener como minimo {#limit} caracteres",
            "string.max":"numeroContacto debe tener como maxino {#limit} caracteres",
            "string.empty":"numeroContacto no puede ser vacio"
        }),
        pathImgPerfil: Joi.string().required().min(10).max(255).messages({
            "any.required":"pathImgPerfil es requerido",
            "string.min":"pathImgPerfil debe tener como minimo {#limit} caracteres",
            "string.max":"pathImgPerfil debe tener como maxino {#limit} caracteres",
            "string.empty":"pathImgPerfil no puede ser vacio"
        }), 
    }
).unknown(false).messages ({
    'object.unknown': 'El atributo {#label} no está permitido.'
})

module.exports = fabricantesSchema
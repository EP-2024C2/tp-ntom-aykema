'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Producto.belongsToMany(models.Fabricante, {
        through: 'ProductoFabricante'
      })
      Producto.belongsToMany(models.Componente, {
        through: 'ProductoComponente'
      })
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    pathImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};
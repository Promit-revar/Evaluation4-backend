'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attribute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Attribute.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    contentTypeId: {
      allowNull:false,
      type:DataTypes.UUID
    },
    attributeId:{
      primaryKey:true,
      allowNull:false,
      type:DataTypes.UUID
    } 
  }, {
    sequelize,
    modelName: 'Attribute',
  });
  return Attribute;
};
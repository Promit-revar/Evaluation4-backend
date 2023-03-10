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
      this.belongsTo(models.ContentTypes,{
        foreignKey:'contentTypeId',
        targetKey:'contentId',
        as:'contentTypes'
      });

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
      defaultValue:DataTypes.UUIDV4,
      type:DataTypes.UUID
    } 
  }, {
    sequelize,
    modelName: 'Attribute',
  });
  return Attribute;
};
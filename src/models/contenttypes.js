'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Attribute,{
        foreignKey:'contentTypeId',
        targetKey:'contentId',
        as:'attributes'
      });
      this.hasMany(models.collection,{
        foreignKey:'contentTypeId',
      });
    }
  }
  ContentTypes.init({
    name: DataTypes.STRING,
    contentId:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    }
  }, {
    sequelize,
    modelName: 'ContentTypes',
  });
  return ContentTypes;
};
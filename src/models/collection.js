'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  collection.init({
    contentTypeId:{
      allowNull:false,
      type:DataTypes.UUID,
    },
    collectionId:{
      primaryKey:true,
      allowNull:false,
      type:DataTypes.UUID
    }, 
    data: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'collection',
    underscored: true,
  });
  return collection;
};
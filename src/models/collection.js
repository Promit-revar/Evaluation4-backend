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
      this.belongsTo(models.ContentTypes,{constraints:false,foreignKey:'contentTypeId',targetKey:'contentId',as:'contentTypes'});
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
  });
  return collection;
};
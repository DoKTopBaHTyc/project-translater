'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Word }) {
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
      this.belongsTo(Word, {
        foreignKey: 'wordId',
      });
    }
  }
  Like.init(
    {
      wordId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Like',
    },
  );
  return Like;
};

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    static associate({ User, Category, Translation }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Category, { foreignKey: 'categoryId' });
      this.hasMany(Translation, { foreignKey: 'wordId' });
    }
  }

  Word.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Word',
    },
  );

  return Word;
};

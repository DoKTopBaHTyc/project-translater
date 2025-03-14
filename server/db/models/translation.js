'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Translation extends Model {
    static associate({ Word, Language }) {
      this.belongsTo(Word, { foreignKey: 'wordId' });
      this.belongsTo(Language, { foreignKey: 'languageId' });
    }
  }

  Translation.init(
    {
      wordId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      languageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      translation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Translation',
    },
  );

  return Translation;
};

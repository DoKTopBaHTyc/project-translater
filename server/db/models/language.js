'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    static associate(models) {
      this.hasMany(models.Translation, {
        foreignKey: 'languageId',
      });
     
    }
  }

  Language.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Language',
    },
  );
  return Language;
};


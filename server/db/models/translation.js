'use strict';

const { Model, Transaction } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate({ Word, Language }) {
      this.belongsTo(Word, { foreignKey: 'wordId' });
      this.belongsTo(Language, { foreignKey: 'languageId' });
    }
  }

  Transaction.init(
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
      modelName: 'Transaction',
    },
  );

  return Transaction;
};

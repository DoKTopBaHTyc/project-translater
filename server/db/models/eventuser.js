'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Eventuser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Event }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Event, { foreignKey: 'eventId' });
    }
  }
  Eventuser.init(
    {
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Eventuser',
    },
  );
  return Eventuser;
};

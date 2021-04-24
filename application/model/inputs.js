const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Inputs extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        expiration_date: {
          type: DataTypes.STRING,
        },
        quantity: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        unit: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'inputs',
      },
    );
  }
}

module.exports = Inputs;

const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Persons extends Model {
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
        document: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        birth_date: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'persons',
      },
    );
  }
}

module.exports = Persons;

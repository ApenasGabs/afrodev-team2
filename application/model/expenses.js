const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Expenses extends Model {
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
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        recurrent: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        destination: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM(['Pago', 'Nao Pago']),
          allowNull: false,
        },
        due_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        pay_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        value: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'expenses',
      },
    );
  }
}

module.exports = Expenses;

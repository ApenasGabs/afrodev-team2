const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Medicines extends Model {
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
        manufacturer: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        prescription: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        expiration_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        batch: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'medicines',
      },
    );
  }
}

module.exports = Medicines;

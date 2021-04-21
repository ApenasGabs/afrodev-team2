const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Ong = require('../application/model/ong');
const Medicines = require('../application/model/medicines');

const connection = new Sequelize(dbConfiguration);
Ong.init(connection);
Medicines.init(connection);
module.exports = connection;

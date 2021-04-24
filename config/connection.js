const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Ong = require('../application/model/ong');
const Persons = require('../application/model/persons');
const Input = require('../application/model/inputs');

const connection = new Sequelize(dbConfiguration);
Ong.init(connection);
Persons.init(connection);
Input.init(connection);

module.exports = connection;

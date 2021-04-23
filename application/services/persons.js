/* eslint-disable no-console */
const moment = require('moment');
const Persons = require('../model/persons');

exports.register = async (persons) => {
  try {
    const date = moment(persons.birth_date, 'DD/MM/YYYY').format('YYYY/MM/DD');
    const birthDate = new Date(date);
    const current = new Date();
    if (birthDate > current) {
      const error = new Error();
      error.message = 'Please, insert a date lower than current date.';
      error.statusCode = 406;
      return error;
    }
    const newpersons = await Persons.create(persons);
    return newpersons;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while creating persons');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (persons) => {
  try {
    const result = await Persons.findAll({
      where: persons,
    });
    return result;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding persons');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const result = await Persons.findByPk(id);
    if (!result) {
      const error = new Error();
      error.message = 'Id not found in database';
      error.statusCode = 404;
      return error;
    }
    return result;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding persons by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newpersons) => {
  try {
    const date = moment(newpersons.birth_date, 'DD/MM/YYYY').format('YYYY/MM/DD');
    const birthDate = new Date(date);
    const current = new Date();
    if (birthDate > current) {
      const error = new Error();
      error.message = 'Please, insert a date lower than current date.';
      error.statusCode = 406;
      return error;
    }
    const result = await Persons.update(newpersons, {
      where: {
        id,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating persons');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newpersons) => {
  try {
    const persons = await Persons.findByPk(id);
    if (!persons) {
      const error = new Error();
      error.message = 'Id not found in database';
      error.status = 404;
      return error;
    }
    const date = moment(persons.birth_date, 'DD/MM/YYYY').format('YYYY/MM/DD');
    const birthDate = new Date(date);
    const current = new Date();
    if (birthDate > current) {
      const error = new Error();
      error.message = 'Please, insert a date lower than current date.';
      error.statusCode = 406;
      return error;
    }
    persons.set(newpersons);
    persons.save();
    return persons;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating persons');
    error.statusCode = 500;
    throw error;
  }
};
